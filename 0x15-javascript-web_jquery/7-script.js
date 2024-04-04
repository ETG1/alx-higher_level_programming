$(document).ready(function() {

    $.getJSON('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {

        var characterName = data.name;

        $('#character').text(characterName);

    error: function(xhr, status, error) {
        console.error('Error fetching character:', error);
      }
    });
});
