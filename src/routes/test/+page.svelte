<script>
	/** @type {import('./$types').PageData} */
	export let data
	console.log(data)
</script>

<h2 class="text-xl mb-4">{data.user.profile.name}</h2>

<div class="container bg-indigo-700 text-gray-100">
	{#each data.users.users as user}
		<p>{user.profile.name}</p>
	{/each}
</div>
