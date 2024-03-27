#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error("An error occurred:", error);
    } else if (response.statusCode !== 200) {
        console.error(`Failed to fetch data, status code: ${response.statusCode}`);
    } else {
        const filmsData = JSON.parse(body).results;
        const moviesWithWedgeAntilles = filmsData.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
        console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`);
    }
});

