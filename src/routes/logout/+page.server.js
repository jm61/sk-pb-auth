import { auth } from "$lib/auth"
import { redirect } from "@sveltejs/kit"

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	await auth.logout()
	event.cookies.delete("auth_token")
	throw redirect(302, "/")
}
