import { json } from "@sveltejs/kit"
import { auth } from "$lib/auth"

export const GET = async (event) => {
	/**
	 * NOTE: You may want to do a different authentication system for API routes.
	 * For example, you may want to check for an auth token or similar, that case,
	 * you will need to update the `src/hooks.server.ts` to add that authentication logic.
	 *
	 * This is just checking to see if they have a cookie set with their session token and
	 * then authenticates them that way, the same as the client.
	 */
	const token = event.cookies.get("auth_token")
	//console.log(token)
	const res = await auth.listUsers({ token })

	return json({ users: res })
}
