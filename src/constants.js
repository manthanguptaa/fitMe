/* eslint-disable no-undef */

const PRODUCTION = process.env.NODE_ENV === 'production';

// Set API_HOST to prod host for production builds.
// const DEV_API_HOST = 'https://hoohacks-2020-272521.appspot.com'; // flask server
const DEV_API_HOST = 'http://localhost:5000'; // flask server
const PROD_API_HOST = 'https://hoohacks-2020-272521.appspot.com';
// PRODUCTION defined in webpack config.
export const API_HOST = PRODUCTION ? PROD_API_HOST : DEV_API_HOST;

// const DEV_SOCKET_HOST = 'wss://poseparty-backend.glitch.me'; // socket server
const DEV_SOCKET_HOST = 'ws://127.0.0.1:8080';
const PROD_SOCKET_HOST = 'wss://poseparty-backend.glitch.me';
export const SOCKET_HOST = PRODUCTION ? PROD_SOCKET_HOST : DEV_SOCKET_HOST;

// For pinging Glitch socket server
export const GLITCH_SOCKET_HTTP_HOST = 'https://poseparty-backend.glitch.me';