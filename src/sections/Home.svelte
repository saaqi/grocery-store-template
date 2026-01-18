<script lang="ts">
	import { social_links } from '$data';
	import { SectionWrapper } from '$components';
	import pattern from '$assets/hero/pattern-1.webp';
	import heroImage from '$assets/hero/food_basket_sketch_2.svg';
</script>

<SectionWrapper id="home" class="home bg-warning text-bg-warning" bgImage={pattern}>
	<div class="row flex-wrap align-items-center">
		<div class="text-col col-lg-6 text-center text-lg-start">
			<div class="lead fw-medium pb-1">Welcome to</div>
			<h1 class="text-uppercase fw-bold pb-2 display-5">Sadiq Super Store</h1>
			<p>
				We offer fresh groceries, snacks, household essentials, and more. Whether you're picking up
				daily necessities or grabbing something quick, we've got you covered with friendly service
				and great prices! Located in Meensesteenweg 2, 8800 Roeselare, Belgium
			</p>
			<ul
				id="hero-social-links"
				class="social-links social-links-hero list-unstyled d-flex flex-wrap py-4 gap-1 fw-bolder justify-content-between"
			>
				{#each social_links as { link, title, link_class, icon } (link)}
					<li class="lh-1">
						<a
							class="{link_class} fs-3"
							href={link}
							aria-label={title}
							target="_blank"
							rel="nofollow noopener noreferrer"
						>
							<i class="bx {icon}"></i>
						</a>
					</li>
				{/each}
			</ul>
			<div
				class="homeButton d-flex gap-3 flex-wrap justify-content-lg-start justify-content-center align-items-center"
			>
				<a
					href="https://maps.app.goo.gl/7DvDtoe2L5U6awqu6"
					rel="nofollow noopener noreferrer"
					class="btn btn-primary px-2"
					target="_blank"
				>
					<i class="bx bxs-map-alt"></i> Visit Us!
				</a>
				<a href="/shop" class="btn btn-outline-primary px-2">
					<i class="bx bxs-store"></i> Shop Now!
				</a>
			</div>
		</div>
		<div class="graphic-col col-lg-6 text-center text-lg-end d-none d-lg-block">
			<img
				src={heroImage}
				class="img-fluid heroImage mt-lg-0 mt-4"
				alt="Shopping basket full of groceries"
				loading="eager"
				draggable="false"
			/>
		</div>
	</div>
</SectionWrapper>

<style>
	.hero {
		display: none;
	}
	.homeButton {
		> .btn {
			width: 10em;
		}
	}
	.heroImage {
		max-width: 75%;
	}
</style>
