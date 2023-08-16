let ContentSecurityPolicy = ``;
ContentSecurityPolicy += `base-uri 'self';`;
ContentSecurityPolicy += `form-action 'self';`;
ContentSecurityPolicy += `default-src 'self';`;
ContentSecurityPolicy += `frame-src https://www.google.com;`;
ContentSecurityPolicy += `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net/ https://storage.googleapis.com  https://www.google.com https://www.gstatic.com https://www.google.com https://www.googletagmanager.com;object-src ;`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
ContentSecurityPolicy += `connect-src 'self' https://www.google.com https://analytics.google.com https://stats.g.doubleclick.net/ https://cdn.jsdelivr.net/ https://storage.googleapis.com/ https://www.google.co.in/ ${process.env.NEXT_PUBLIC_INQUIRY_API_URL} ${process.env.NEXT_PUBLIC_LOCATION_API_URL} ${process.env.NEXT_PUBLIC_LOCATION_API_FALLBACK_URL} ${process.env.NEXT_PUBLIC_IMAGE_BG_REMOVE_URL} ${process.env.NEXT_PUBLIC_IMAGE_CLUSTERING_URL};`;
ContentSecurityPolicy += `style-src 'self' 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
ContentSecurityPolicy += `img-src 'self' https://www.google.co.in/ https://www.googletagmanager.com/ https://stats.g.doubleclick.net/ ${process.env.NEXT_PUBLIC_IMAGES_URL} ${process.env.NEXT_PUBLIC_BLOG_IMAGES_DOMAIN}  data: blob:;`;
ContentSecurityPolicy += `font-src 'self' data:`;

const Headers = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload'
	},
	{
		key: 'Server',
		value: 'BS'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'X-Frame-Options',
		value: 'sameorigin'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'Referrer-Policy',
		value: 'same-origin'
	},
	{
		key: 'Permissions-Policy',
		value: 'geolocation=*' // allow specified policies here
	},
	{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }
];

module.exports = Headers;
