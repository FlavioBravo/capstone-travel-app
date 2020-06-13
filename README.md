# capstone-travel-app

Last project of my nanodegree program. This project was build with Webpack, Sass, Service workers, three external API's, express, node.js and Jest.

## Getting started

Clone my project and after you will need to install everything:

cd into your new folder and run:

`npm install`

## Setting up the API's

You need credencial of the Geonames API to validade your requests. [Geonames Oficial Page] http://www.geonames.org/export/web-services.html
You need credencial of the Weatherbit API to validade your requests. [Weatherbit Oficial Page] https://www.weatherbit.io/account/create
You need credencial of the Pixabay API to validade your requests. [Pixabay Oficial Page] https://pixabay.com/api/docs/

## Environment Variables

Next we need to declare our API keys, which will look something like this in the .env file:

`API_KEY_GEONAMES="your-api-username" API_KEY_WEATHERBIT="your-api-key" API_KEY_PIXABAY="your-api-key"`

Use NPM to run the project in Dev mode with the command `npm run build-dev`, or in production mode with `npm run build-prod`.
Use NPM to run the project with the command `npm run start` to run the backend (server).
