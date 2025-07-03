interface Props {
	// Define the properties for the shared state
	filter: string;
	shopHeading: string;
}

export const store: Props = $state({
	// Shared state for the application
	filter: '',
	shopHeading: ''
});
