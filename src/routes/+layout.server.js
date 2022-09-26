/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
	const user = event.locals?.user
	if (!user) return { user }
	delete user.token
	return { user }
}
