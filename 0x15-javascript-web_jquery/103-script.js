$(document).ready(function() {
            function fetchTranslation(languageCode) {

                $.getJSON('https://www.fourtonfish.com/hellosalut/hello/?lang=' + languageCode, function(data) {
                    $('#hello').text(data.hello);
                });
            }

            $('#btn_translate').click(function() {
                var languageCode = $('#language_code').val();
                fetchTranslation(languageCode);
            });

            $('#language_code').keypress(function(event) {
                if (event.keyCode === 13) {
                    var languageCode = $(this).val();
                    fetchTranslation(languageCode);
                }
            });
        });
