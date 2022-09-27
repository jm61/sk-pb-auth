<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<section class="prose">
	<div class="hero">
		<h1>Dashboard</h1>
		<img
			src={`http://127.0.0.1:8090/api/files/systemprofiles0/${data.user.profile.id}/${data.user?.profile.avatar}?thumb=100x100`}
			alt="avatar"
		/>
	</div>
	<p>
		🎉 Hello there <strong>{data.user?.profile.name}</strong>, you're logged in!
	</p>
	<ul>
		<li><a href="/settings">Settings</a> - Another authenticated route.</li>
		<li><a href="/userslist">Users List</a> - Authenticated route.</li>
		<li>
			<a href="/collectionsList">Collections List</a> - Authenticated route.
		</li>
		<li>
			<a href="/api/me" target="_blank"><code>/api/me</code></a> to get your
			user data in an authenticated API request.
			<ul>
				<li>
					Note that if you want to make this request outside of the browser, you
					can pass in a <code>Authorization: Bearer &lt;TOKEN&gt;</code>
					header in your request (try the value
					<code>seed-user-sesion-token</code> to get our fake demo user's info).
				</li>
			</ul>
		</li>
		<li><a href="/api/users" target="_blank">/api/users</a></li>
		<li>
			<!-- Use data-sveltekit-reload to prevent client-side navigation and force a reload of the page -->
			<a data-sveltekit-reload href="/logout" class="link">Log Out</a> - Clears the
			user's token and redirects them back to the homepage.
		</li>
	</ul>
</section>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4rem;
	}
	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
