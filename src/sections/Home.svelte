<script lang="ts">
	import heroImageSvg from '$assets/hero/hero-image.svg';
	import heroImage1200 from '$assets/hero/hero-image@1200x.webp';
	import heroImage992 from '$assets/hero/hero-image@992x.webp';
	import heroImage768 from '$assets/hero/hero-image@768x.webp';
	import heroImage576 from '$assets/hero/hero-image@576x.webp';

	import { SectionWrapper } from '$components'
	import { social_links } from '$data';
</script>

<SectionWrapper id="home" class="home bg-warning text-bg-warning">
	<div class="container">
		<div class="row flex-wrap-reverse align-items-center">
			<div class="text-col col-lg-6 text-center text-lg-start mt-3 mt-lg-0">
				<div class="lead fw-medium pb-1">Welcome to</div>
				<h1 class="text-uppercase fw-bold pb-2">Sadiq Super Store</h1>
				<p class="fs-5">
					We offer fresh groceries, snacks, household essentials, and more. Whether you're picking
					up daily necessities or grabbing something quick, we've got you covered with friendly
					service and great prices! Located in Meensesteenweg 2, 8800 Roeselare, Belgium
				</p>
				<ul
					id="hero-social-links"
					class="social-links social-links-hero list-unstyled d-flex flex-wrap py-4 gap-1 fw-bolder justify-content-between"
				>
					{#each social_links as { link, title, link_class, icon }, index('home-social-link-' + index)}
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
				<div class="d-flex gap-3 flex-wrap justify-content-lg-start justify-content-center">
					<a
						href="https://maps.app.goo.gl/7DvDtoe2L5U6awqu6"
            rel="nofollow noopener noreferrer"
						class="btn btn-primary"
						target="_blank"
					>
						<i class="bx bxs-map-alt"></i> Visit Us!
					</a>
					<a href="tel:+32465638887" class="btn btn-info">
						<i class="bx bxs-phone-call"></i> Call Us!
					</a>
				</div>
			</div>
			<div class="graphic-col col-lg-6 text-center text-lg-end">
				<picture>
					<source media="(max-width: 576px)" srcset={heroImage576} type="image/webp" />
					<source media="(max-width: 768px)" srcset={heroImage768} type="image/webp" />
					<source media="(max-width: 992px)" srcset={heroImage992} type="image/webp" />
					<source media="(max-width: 1200px)" srcset={heroImage1200} type="image/webp" />
					<source media="(min-width: 1201px)" srcset={heroImageSvg} type="image/svg+xml" />
					<img class="img-fluid hero-image" src={heroImageSvg} alt="Basket full of Groceries" />
				</picture>
			</div>
		</div>
	</div>
</SectionWrapper>
