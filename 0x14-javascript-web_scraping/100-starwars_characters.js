#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error("An error occurred:", error);
    } else if (response.statusCode !== 200) {
        console.error(`Failed to fetch data, status code: ${response.statusCode}`);
    } else {
        const movieData = JSON.parse(body);
        console.log(`Characters in "${movieData.title}":`);
        movieData.characters.forEach(characterUrl => {
            request(characterUrl, (error, response, body) => {
                if (error) {
                    console.error("An error occurred:", error);
                } else if (response.statusCode !== 200) {
                    console.error(`Failed to fetch data, status code: ${response.statusCode}`);
                } else {
                    const characterData = JSON.parse(body);
                    console.log(characterData.name);
                }
            });
        });
    }
});

