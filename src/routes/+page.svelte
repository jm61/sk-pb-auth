<script>
	import { session } from "$lib/stores/session"
	import { USERS } from "$lib/faker"
</script>

<div class="prose">
	<h1>SvelteKit Auth Example</h1>
	<p>
		This project shows you how to implement a simple authentication system using
		SvelteKit.
	</p>
	<p>
		<a
			href="https://github.com/danawoodman/sveltekit-auth-example"
			target="_blank"
			rel="noopen">Checkout the source code here</a
		>.
	</p>
	<p>
		This demo is connected to a self hosted pocketbase DB. The auth token is
		stored in cookies.
	</p>
	<p>
		Try signing up, loggin out, then logging in with that same user credentials
		then try and API request.
	</p>
	<p class="flex items-center gap-4 mt-12">
		{#if $session?.user}
			<a href="/dashboard" class="btn btn-primary">Dashboard</a>
			<a href="/settings" class="btn">Settings</a>
		{:else}
			<a href="/signup" class="btn btn-primary">Sign Up</a>
			<a href="/login" class="btn">Log In</a>
		{/if}
	</p>
</div>

{#each USERS as image}
	<img src={image.image} alt="pic" />
{/each}
