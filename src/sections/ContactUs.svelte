<script lang="ts">
	import { SectionWrapper, ContactForm } from '$components';

	let outputDay: string = $state('');
	let outputTime: string = $state('');
	let isOpeningHours: boolean = $state(false);
	const openMsg: string = '<span class="open text-primary fw-bold">Open</span> come on down 🙂';
	const morningMsg: string =
		'<span class="text-danger-emphasis fw-bold">Closed</span> at this hour see you at 9:00 AM 😴';
	const tomorrowMsg: string =
		'<span class="text-danger-emphasis fw-bold">Closed</span> see you tomorrow 😴';

	const storeStatus = () => {
		const timeZone = 'Europe/Brussels';
		const now = new Date();
		const localTime = new Date(
			now.toLocaleString('en-US', {
				timeZone: timeZone
			})
		);
		// Days ---------------------------
		const options = { weekday: 'long' as const };
		const formattedTime = now.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			hour12: true,
			timeZone: timeZone
		});
		const orangeCityDayToday = new Intl.DateTimeFormat('en-US', options).format(localTime);
		outputDay = `${orangeCityDayToday} ${formattedTime}`;

		// Time --------------------------
		const hours = localTime.getHours();
		const dayOfWeek = localTime.toLocaleString('en-US', {
			timeZone,
			weekday: 'long'
		});

		const openingHours = {
			Monday: [9, 20],
			Tuesday: [9, 20],
			Wednesday: [9, 20],
			Saturday: [9, 20],
			Sunday: [9, 20],
			Friday: [9, 21]
		};

		const [startHour, endHour] = openingHours[dayOfWeek as keyof typeof openingHours] || [];
		isOpeningHours = startHour <= hours && hours < endHour;

		if (isOpeningHours) outputTime = openMsg;
		else if (dayOfWeek === 'Thursday') outputTime = tomorrowMsg;
		else if (hours < 9) outputTime = morningMsg;
		else outputTime = tomorrowMsg;
	};
	storeStatus();
	setInterval(storeStatus, 15000);
</script>

<SectionWrapper id="contact" heading="Contact Us!" class="section bg-info-subtle">
	<div class="container">
		<div class="row py-4">
			<div class="col-lg-6 working-hours border-primary mb-4 mb-lg-0">
				<div class="business-hours fs-5 mb-3 fw-medium" id="business-hours">
					<p><i class="bx bxs-calendar"></i> It is {outputDay}, We are {@html outputTime}</p>
				</div>
				<table class="table table-info table-bordered table-striped table-hover">
					<thead class="thead">
						<tr>
							<th><i class="bx bxs-calendar-event"></i> Day</th>
							<th><i class="bx bxs-time"></i> Hours ( Europe/Brussels )</th>
						</tr>
					</thead>
					<tbody class="business-hours-table">
						<tr>
							<td>Monday</td>
							<td>09:00 AM - 08:00 PM</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td>09:00 AM - 08:00 PM</td>
						</tr>
						<tr>
							<td>Wednesday</td>
							<td>09:00 AM - 08:00 PM</td>
						</tr>
						<tr>
							<td>Thursday</td>
							<td class="text-danger-emphasis">Closed</td>
						</tr>
						<tr>
							<td>Friday</td>
							<td>09:00 AM - 09:00 PM</td>
						</tr>
						<tr>
							<td>Saturday</td>
							<td>09:00 AM - 08:00 PM</td>
						</tr>
						<tr>
							<td>Sunday</td>
							<td>09:00 AM - 08:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-lg-6">
				<p>Have something in mind? Please don't hesitate to ask us!</p>
				<ContactForm />
			</div>
		</div>
	</div>
</SectionWrapper>

<style>
	.table td {
		padding: 0.6em 1em;
	}
</style>
