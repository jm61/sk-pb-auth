import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

import { json } from "@sveltejs/kit"
//import { auth } from "$lib/auth"

/** @type {import('./$types').ServerLoad} */
export const GET = async () => {
	await client.users.authViaEmail("paul@g.com", "12345")
	const model = await client.authStore

	return json({ ...model })
}
