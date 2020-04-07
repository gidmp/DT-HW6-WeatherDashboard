

$(document).ready(function() {
    var cityHistory = [];

    //when search button is clicked
    $("#search-city-button").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#city-input").val().trim();

        // Adding cities from the textbox to array
        cityHistory.push(city);

        //immediately take the value and run it on ajax

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
        //clear input form after submission
        $("#city-input").val("");

    });
    
    //render city history buttons
    function renderButtons(){
        $("#search-history").empty();

        for (var i = 0; i < cityHistory.length; i++) {
            var createButtons = $("<button>");
            //add class to each buttons
            createButtons.addClass("cityButtons");
            //add attrinute equals to the city names
            createButtons.attr("data-name", cityHistory[i]);
            //print the city name on the buttons
            createButtons.text(cityHistory[i]);
            //prepend the city name into the div
            $("#search-history").prepend(createButtons);
        }
    }


    function displayInfo(){
        var cityName = $(this).attr("data-name");
        var api = "96428242b049309d31d51b7cb823fae0";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid=" + api;

        
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            //write the code to create and append the info on screen
        })
    }

    //when city history button is click, run through displayInfo function and print the info
    $(document).on("click", ".cityButtons", displayInfo);



})