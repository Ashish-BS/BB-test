const config = {
	TOASTER_OPTIONS: {
		SUCCESS: {
			duration: 4000,
			style: {
				maxWidth: 450,
				borderRadius: '10px',
				background: 'var(--toaster-bg-color)',
				color: 'var(--color-theme-primary)'
			}
		},
		ERROR: {
			duration: 4000,
			style: {
				maxWidth: 450,
				borderRadius: '10px',
				background: '#CD0000',
				color: '#fff'
			}
		}
	},
	API_VERSION: 'v1'
};

export default config;
