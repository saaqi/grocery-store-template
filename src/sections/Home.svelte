<script lang="ts">
	// @ts-ignore
	import heroImage from '$assets/hero/hero-image.png?enhanced&w=2800;1400;1200;992;768;576&format=avif;webp';
	import { SectionWrapper } from '$components';
	import { social_links } from '$data';
</script>

<SectionWrapper id="home" className="home bg-warning text-bg-warning">
	<div class="row flex-wrap-reverse align-items-center">
		<div class="text-col col-lg-6 text-center text-lg-start mt-3 mt-lg-0">
			<div class="lead fw-medium pb-1">Welcome to</div>
			<h1 class="text-uppercase fw-bold pb-2">Sadiq Super Store</h1>
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
							aria-label={title + '!'}
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
		<div class="graphic-col col-lg-6 text-center text-lg-end">
			<enhanced:img
				src={heroImage}
				sizes="(min-width: 2800px) 2800px, 100vw"
				class="img-fluid"
				alt="Shopping basket full of groceries"
				loading="eager"
				draggable="false"
			/>
		</div>
	</div>
</SectionWrapper>

<style>
	.homeButton {
		> .btn {
			width: 10em;
		}
	}
</style>
