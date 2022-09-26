/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const res = await fetch("/api/users")
	const users = await res.json()
	//console.log(users)
	return { users, title: "Users List" }
}
