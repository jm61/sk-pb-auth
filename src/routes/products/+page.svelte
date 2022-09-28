<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<!-- <pre>{JSON.stringify(data.items, null, 2)}</pre> -->

<h3 class="mb-6 text-2xl text-center">Products List</h3>
<div
	class="container w-full bg-indigo-700 text-gray-100 p-2 rounded-lg grid grid-cols-3 gap-4 mx-auto "
>
	{#each data.items as product}
		<div class="card h-96 w-60 bg-base-100 shadow-xl pt-2">
			<figure>
				<img
					class="rounded-md"
					src={`http://127.0.0.1:8090/api/files/l52nrj89sz9h1dp/${product.id}/${product.image}?thumb=100x100`}
					alt="pic"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{product.title}</h2>
				<p class="test">{product.description}</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">
						{product["@expand"].category.title}
					</div>
					<button class="btn btn-primary">Buy €{product.price}</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.test {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
