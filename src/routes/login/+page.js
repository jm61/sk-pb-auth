import { redirect } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load(event) {
	const { user } = await event.parent()
	if (user) throw redirect(303, "/")
	return { title: "Log In" }
}
