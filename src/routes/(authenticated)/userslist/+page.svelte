<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<h2 class="text-xl mb-4">{data.user.profile.name}</h2>

<h3 class="mb-2">Users List</h3>
<div class="container bg-indigo-700 text-gray-100 p-2 rounded-lg">
	{#each data.items as user}
		<p>{user.profile.name}</p>
	{/each}
</div>
