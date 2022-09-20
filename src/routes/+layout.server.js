//import type { LayoutServerLoadEvent } from "./$types";

export async function load(event) {
	const user = event.locals?.user;
	if (!user) return { user };
	delete user.token;
	return { user };
}
