// environment.prod.ts
export const environment = {
    production: true,
    apiKey: process.env.API_KEY || 'default-api-key',
    apiUrl: process.env.API_URL || 'http://default-api-url'
};