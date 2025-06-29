<script lang="ts">
	import { slide } from 'svelte/transition';
	import { appData } from '$lib'

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let emailValid = $state(false);
	let disableSubmit = $state(true);
	let mailtoUrl = '';

	$effect(() => {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const fallbackSubject = `[Contact-Form] ${appData.baseURL}`;
		emailValid = email !== '' && emailRegex.test(email);
		disableSubmit = !(name !== '' && emailValid && message !== '');
		mailtoUrl = [
			`mailto:${appData.baseEmail}`,
			`?subject=${encodeURIComponent(subject.trim() || fallbackSubject)}`,
			`&body=${encodeURIComponent(message.trim())}%0D%0A%0D%0A`,
			`From: ${name.trim()}%0D%0A${email.trim()}`
		].join('');
	});

	const border = $derived({
		name: name ? 'border-success-subtle' : 'border-danger-subtle',
		email: emailValid ? 'border-success-subtle' : 'border-danger-subtle',
		message: message ? 'border-success-subtle' : 'border-danger-subtle',
		submit: disableSubmit ? 'border-danger-subtle' : 'border-success-subtle'
	});

	const onclick = (event: Event) => {
		event.preventDefault();
		if (!disableSubmit) window.open(mailtoUrl, '_blank');
	};

	let mainAlert: boolean = $state(false);
	const showMainAlert = () => {
		if (disableSubmit) mainAlert = true;
	};
	const hideMainAlert = () => (mainAlert = false);
</script>

<form id="contact-email-form" class="contact-email-form">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<label for="contact-form-name">
					<i class="bx bx-user-pin"></i> Name:
				</label>
				<input
					bind:value={name}
					type="text"
					name="contact-form-name"
					class="form-control {border.name}"
					id="contact-form-name"
					placeholder="Enter Your Full Name *"
					required
				/>
			</div>
			<div class="col-md-6 mt-3 mt-md-0">
				<label for="contact-form-email">
					<i class="bx bx-envelope"></i> Email Address:
				</label>
				<input
					bind:value={email}
					type="email"
					class="form-control {border.email}"
					name="contact-form-email"
					id="contact-form-email"
					placeholder="Enter Your Email *"
					required
				/>
			</div>
			{#if !emailValid && email}
				<div class="col mt-3">
					<div class="alert alert-danger m-0" role="alert" transition:slide={{ duration: 100 }}>
						Please enter a Valid E-Mail Address to continue.
					</div>
				</div>
			{/if}
		</div>
		<div class="mt-3">
			<label for="contact-form-subject">
				<i class="bx bx-message-dots"></i> Subject:
			</label>
			<input
				bind:value={subject}
				type="text"
				class="form-control"
				name="contact-form-subject"
				id="contact-form-subject"
				placeholder="Enter The subject"
			/>
		</div>
		<div class="mt-3">
			<label for="contact-form-message">
				<i class="bx bx-chat"></i> Message:
			</label>
			<textarea
				bind:value={message}
				class="form-control {border.message}"
				name="contact-form-message"
				id="contact-form-message"
				rows="5"
				placeholder="What is on your mind? *"
				required
			></textarea>
		</div>
		<div
			class="mt-4 submitContainer"
			onmouseenter={showMainAlert}
			onfocus={showMainAlert}
			onmouseleave={hideMainAlert}
			onblur={hideMainAlert}
			role="presentation"
		>
			<button
				{onclick}
				type="submit"
				class="btn btn-primary w-100"
				disabled={disableSubmit}
				aria-disabled={disableSubmit}
			>
				<i class="bx bxs-envelope"></i> Send Message
			</button>
			{#if mainAlert}
				<div class="alert alert-danger mt-3" role="alert" transition:slide={{ duration: 100 }}>
					Please complete the form before sending your message.
				</div>
			{/if}
		</div>
	</div>
</form>

<style>
	.form-control:focus {
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
	}

	.btn:disabled {
		box-shadow: none;
	}

	.submitContainer:hover:has(.btn[disabled]) {
		cursor: not-allowed;
	}
</style>
