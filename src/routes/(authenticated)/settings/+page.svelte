<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<section class="prose">
	<h1>Settings</h1>
	<p>
		<label class="flex items-center gap-4">
			<input type="checkbox" class="toggle" />
			Enable thrusters 🚀
		</label>
	</p>
</section>

<pre>{JSON.stringify(data.settings, null, 2)}</pre>
