import PocketBase from "pocketbase"
const client = new PocketBase("http://127.0.0.1:8090")

// fetch a paginated records list
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const products = await client.records.getList("faker", 1, 12, {
		expand: "category",
	})
	/* const products = await client.records.getList("products", 1, 12, {
		expand: "category",
	}) */

	return structuredClone(products)
}

// alternatively you can also fetch all records at once via getFullList:
/* const records = await client.records.getFullList('demo', 200, {
    sort: '-created',
}); */
