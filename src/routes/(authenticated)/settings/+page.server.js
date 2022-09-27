import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	await client.admins.authViaEmail("admin@g.com", "1234512345")
	const settings = await client.settings.getAll()
	return { settings: settings, title: "Settings" }
}
