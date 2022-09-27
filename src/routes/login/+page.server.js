import { auth } from "$lib/auth"
import { AUTH_TOKEN_EXPIRY_SECONDS } from "$lib/constants.server"
import { invalid, redirect } from "@sveltejs/kit"
import debug from "debug"

const log = debug("app:routes:login:page.server")

/** @type {import('./$types').Actions} */
export const actions = {
	async default(event) {
		const data = await event.request.formData()
		const email = data.get("email")
		const password = data.get("password")

		const resp = await auth.login({
			email,
			password,
			opts: { cookies: event.cookies },
		})

		if (resp.isErr()) {
			const error = (
				String(resp.error) ??
				"No account with that email or username could be found."
			).trim()
			return invalid(401, { email, error })
		}

		const user = resp.value

		log("user:", user)

		if (user && user.token) {
			// TODO: duplicated in login page
			event.cookies.set("auth_token", `${user.id}:${user.token}`, {
				path: "/",
				maxAge: AUTH_TOKEN_EXPIRY_SECONDS,
				sameSite: "strict",
			})
		}

		log("redirecting user...")

		delete user.token

		return { user }
	},
}
