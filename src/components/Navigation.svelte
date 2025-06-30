<script lang="ts">
	import logo from '$assets/logo.svg';
	import { nav_links } from '$data';

	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/offcanvas.js');
		await import('bootstrap/js/dist/dropdown.js');
	});

	import { page } from '$app/state';
</script>

<header id="header" class="site-header bg-warning text-bg-warning position-fixed w-100">
	<div class="container">
		<nav
			id="header-nav"
			class="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-1"
		>
			<a
				class="d-block d-lg-none rounded navbar-toggler btn btn-outline-primary nav-shop-button"
				href="/shop"
				aria-label="Shopping Categories"
			>
				<i class="bx bxs-store display-6"></i>
			</a>
			<a class="navbar-brand me-0" href="/">
				<img src={logo} class="logo" alt="Logo" height="50" />
			</a>
			<button
				class="navbar-toggler p-1 btn btn-outline-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#bdNavbar"
				aria-controls="bdNavbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="bx bx-menu-alt-right display-5"></i>
			</button>
			<div class="offcanvas offcanvas-end bg-warning" tabindex="-1" id="bdNavbar">
				<div class="offcanvas-header justify-content-between">
					<img
						src={logo}
						alt="Sadiq Super Store Logo"
						class="img-fluid display-5"
						style="height: 1em"
						loading="lazy"
						draggable="false"
					/>
					<button
						type="button"
						class="btn btn-outline-primary p-0 lh-1"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
						data-bs-target="#bdNavbar"
					>
						<i class="bx bx-x display-4"></i>
					</button>
				</div>
				<div class="offcanvas-body">
					<ul
						id="navbar"
						class="navbar-nav main-nav text-uppercase justify-content-end gap-1 gap-lg-2 fs-6 ps-5 p-lg-0 flex-grow-1"
					>
						{#each nav_links as { link, text, icon, subcategories } (link)}
							{#if !subcategories}
								<li class="nav-item" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">
									<a
										class="nav-link link-dark fw-bold"
										class:active={link === page.route.id}
										href={link}
									>
										<i class="bx {icon}"></i>
										{text}
									</a>
								</li>
							{:else}
								<li class="nav-item dropdown">
									<a
										class="nav-link link-dark dropdown-toggle fw-bold"
										class:active={link === page.route.id ||
											subcategories.some((sub) => sub.shopLink === page.params.categoryId)}
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<i class="bx {icon}"></i>
										{text}
									</a>
									<ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
										{#each subcategories as subcategory (subcategory.shopLink)}
											<li
												class="nav-item m-2"
												data-bs-dismiss="offcanvas"
												data-bs-target="#bdNavbar"
											>
												<a
													class="dropdown-item py-2 fw-bold"
													class:active={subcategory.shopLink === page.params.categoryId}
													href={'/shop/' + subcategory.shopLink}
												>
													<i class="bx bxs-purchase-tag"></i>
													{subcategory.title}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>
<div class="nav-spacer bg-warning"></div>

<style lang="scss">
	.site-header {
		z-index: 10;
		transition: var(--transition);
	}

	.nav-spacer {
		height: 68px;
	}

	.site-header {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.navbar-nav {
		a.nav-link,
		a.dropdown-item {
			line-height: 1;
		}
	}

	@media (max-width: 992px) {
		.navbar-nav {
			a.nav-link,
			a.dropdown-item {
				line-height: 1;
				padding-top: 1rem;
				padding-bottom: 1rem;
			}
		}
	}

	.navbar-nav .nav-item a.nav-link.active,
	.navbar-nav .nav-item a.nav-link:hover {
		color: rgb(var(--bs-primary-rgb)) !important;
		text-shadow: 1px 1px 2px rgba(var(--bs-primary-rgb), 0.3);
		// text-decoration: underline;
	}

	.nav-shop-button {
		padding: 0.427rem;
	}

	/*------------ Offcanvas -------------- */
	#header-nav .navbar-toggler:focus {
		box-shadow: none;
	}

	#header-nav .offcanvas-end {
		width: 500px;
	}
</style>
