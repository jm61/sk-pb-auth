import { USERS, createRandomUser } from "$lib/faker"
//console.log(USERS)
import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

export async function load() {
	/* const user = USERS[9]
	await client.records.create("faker", {
		title: user.title,
		price: user.price,
		category: user.category,
		description: user.description,
	}) */
	createRandomUser()
	console.log(USERS)
}
