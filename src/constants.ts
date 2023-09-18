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
	SOCIAL_MEDIA_STATS: {
		FACEBOOK: {
			REACH: 34420,
			FOLLOWERS: 3886
		},
		INSTAGRAM: {
			REACH: 306170,
			FOLLOWERS: 29890
		},
		YOUTUBE: {
			REACH: 2680,
			FOLLOWERS: 254
		}
	},
	API_VERSION: 'v1'
};

export default config;
