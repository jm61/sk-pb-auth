import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
	await client.admins.authViaEmail("admin@g.com", "1234512345")
	const users = await client.users.getList(1, 10)
	console.log(`This output is from Server: ${users.items.length} users`)
	return structuredClone(users)
}
