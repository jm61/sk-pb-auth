import debug from "debug"
import { err, ok, ResultAsync } from "neverthrow"
import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

const log = debug("app:lib:auth:pocketbase")

const POCKETBASE_API_URL = "http://127.0.0.1:8090/api"

export const pocketbase = {
	async login({ email, password }) {
		// TODO: add Zod
		const resp = await pocketbase_request({
			path: "/users/auth-via-email",
			method: "POST",
			body: { email, password },
			fallback_error_message: "error logging in",
		})

		log("[login] resp:", resp)

		if (resp.isErr()) return err(resp.error)
		if (!("user" in resp.value))
			return err(new Error(resp.value?.message ?? "no user found"))

		const { user, token } = resp.value

		log("[login] user:", user)

		return ok({ ...user, token })
	},

	async signup({ email, password, password_confirm }) {
		// TODO: add Zod
		const resp = await pocketbase_request({
			path: "/users",
			method: "POST",
			body: { email, password, passwordConfirm: password_confirm },
			fallback_error_message: "error logging in",
		})

		log("[signup] resp:", resp)

		if (resp.isErr()) return err(resp.error)

		if ("message" in resp.value)
			return err(new Error(resp.value.message ?? "unknown signup error"))

		const user = resp.value

		if (!("id" in user) || !("email" in user))
			return err(new Error("no user found"))

		log("[signup] signed up user:", user)

		return ok(user)
	},

	async validate_session({ token }) {
		// TODO: add Zod
		const [user_id, session_token] = token.split(":")

		log("[validate_session] id:", user_id)
		// log("[validate_session] token:", session_token);

		const resp = await pocketbase_request({
			path: `/users/${user_id}`,
			headers: { Authorization: "User " + session_token },
		})

		log("[validate_session] resp:", resp)

		if (resp.isErr()) return err(resp.error)

		const user = resp.value
		if (!user) return err(new Error("no user found"))

		log("[validate_session] user:", user)

		return ok(user)
	},

	async logout() {
		// This is a non-op because PocketBase doesn't have a logout endpoint.
		// since it uses JWTs.
		return
	},

	async listUsers() {
		await client.admins.authViaEmail("admin@g.com", "1234512345")
		const users = await client.users.getList(1, 10)
		console.log(`This output is from Server: ${users.totalItems} users`)
		return [...users.items]
	},
}

async function pocketbase_request({
	path,
	method = "GET",
	body = null,
	headers = {},
	fallback_error_message = "unknown error",
}) {
	const url = POCKETBASE_API_URL + path

	log("url:", url)

	const init = {
		method,
		...(body ? { body: JSON.stringify(body) } : {}),
		headers: { ...headers, "Content-Type": "application/json" },
	}

	log("init:", init)

	const request = fetch(url, init).then((r) => r.json())

	return ResultAsync.fromPromise(
		request,
		() => new Error(fallback_error_message)
	)
}
