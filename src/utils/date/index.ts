// Function to get the day suffix (e.g., "st", "nd", "rd", "th")
const getDaySuffix = (day: number) => {
	if (day >= 11 && day <= 13) {
		return 'th';
	}
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};

export const getLocaleDate = (timestamp: Date): string => {
	// Create a new Date object using the timestamp
	const date = new Date(timestamp);

	// Get the day, month, and year components of the date
	const day = date.getDate();
	const month = date.toLocaleDateString('en-US', { month: 'short' });
	const year = date.getFullYear();

	// Format the date string with the desired format
	const dateString = `${day}${getDaySuffix(day)} ${month}, ${year}`;

	return dateString;
};
