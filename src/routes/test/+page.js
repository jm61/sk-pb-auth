/** @type {import('./$types').PageLoad} */
export const load = (event) => {
	console.log(event);
	return {
		user: "James",
	};
};
