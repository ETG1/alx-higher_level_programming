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
        const characterUrls = movieData.characters;

        function fetchCharacter(index) {
            if (index === characterUrls.length) {
                return;
            }
            request(characterUrls[index], (error, response, body) => {
                if (error) {
                    console.error("An error occurred:", error);
                } else if (response.statusCode !== 200) {
                    console.error(`Failed to fetch data, status code: ${response.statusCode}`);
                } else {
                    const characterData = JSON.parse(body);
                    console.log(characterData.name);
                    fetchCharacter(index + 1);
                }
            });
        }

        console.log(`Characters in "${movieData.title}":`);
        fetchCharacter(0); 
    }
});

