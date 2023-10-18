import nextJest from 'next/jest.js';
import { Config } from 'jest';
const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config: Config = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
moduleNameMapper: {
		// Jest cannot understand this swiper import so we tell it where this points to
		'swiper/css': 'swiper/swiper.min.css'
	},
	testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [`node_modules/(?!(swiper|ssr-window|dom7)/)`]

};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
