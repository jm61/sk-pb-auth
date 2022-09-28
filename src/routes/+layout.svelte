<script>
	import "../app.postcss"
	import { page } from "$app/stores"
	import Footer from "./Footer.svelte"
	import Header from "./Header.svelte"
	import debug from "debug"
	import { session } from "$lib/stores/session"

	const log = debug("app:routes:layout.svelte")

	/** @type {import('./$types').LayoutData} */
	export let data

	$: title = $page.data?.title ? $page.data.title + " | " : ""

	$: if (data?.user) $session.user = data.user

	$: log("data:", data)
	$: log("$page.data:", $page.data)
</script>

<svelte:head>
	<title>{title}SvelteKit Auth Demo</title>
</svelte:head>

<Header />

<main class="max-w-screen-lg mx-auto my-20 px-6">
	<slot />
</main>

<Footer />
