import UAParser from 'ua-parser-js';

const getUserAgentInfo = () => {
	const ua = new UAParser();
	const results = ua.getResult();
	return {
		isMobile: results.device && (results.device.type === 'mobile' || results.device.type === 'tablet'),
		isDesktop: !(results.device) || (results.device.type !== 'mobile' && results.device.type !== 'tablet')
	};
};
export default getUserAgentInfo;
