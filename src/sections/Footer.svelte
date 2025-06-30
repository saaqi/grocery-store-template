<script lang="ts">
	import { social_links, nav_links } from '$data';
	import logo from '$assets/logo.svg';
	const curr_year: number = new Date().getFullYear();
</script>

<footer id="footer" class="overflow-hidden pt-5 bg-secondary-subtle text-bg-seondary">
	<div class="container">
		<div class="row">
			<div class="col-md-4 pb-4 text-center text-md-start">
				<img class="img-fluid footer-logo" src={logo} alt="logo" width="203" height="250" />
			</div>
			<div class="col-md-4 pb-4">
				<div class="pb-2 h4">Quick Links:</div>
				<ul id="footer-nav" class="menu-list list-unstyled">
					{#each nav_links as { link, text, icon } (link)}
						<li class="nav-item mb-3">
							<a class="nav-link link-dark fw-bold" href={link}>
								<i class="bx {icon}"></i>
								{text}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="col-md-4 pb-4">
				<div class="pb-2 h4">Contact Us:</div>
				<p>
					Please visit us at <a href="https://maps.app.goo.gl/7DvDtoe2L5U6awqu6" target="_blank"
						>Meensesteenweg 2, 8800 Roeselare</a
					>
				</p>
				<p>
					If you have any queries or suggestions E-Mail us at <a
						href="mailto:info@sadiqsuperstore.com">info@sadiqsuperstore.com</a
					>
					or Just give us a call.
					<a href="https://wa.me/+32465638887" target="_blank">+32-465-63-88-87</a>
				</p>
				<ul
					id="footer-social-links"
					class="social-links social-links-footer d-flex flex-wrap justify-content-around mt-4 list-unstyled"
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
			</div>
		</div>
	</div>
	<div id="footer-bottom">
		<div class="container">
			<div class="row pb-4">
				<div class="col-12 col-sm-6 text-center text-sm-start py-1">
					© {curr_year}, Sadiq Super Store
				</div>
				<div class="col-12 col-sm-6 text-center text-sm-end py-1">
					Designed By
					<a
						href="https://saqibtech.com/"
						target="_blank"
						title="Saqib Islam - UI/UX Designer & Fullstack Developer."
					>
						Saaqi
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-logo {
		max-height: 250px;
	}
</style>
