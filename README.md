# DT-6-WeatherDashboard
HW6 of UW coding bootcamp

The goal for this homework is to utilize weathermap API to create a simple weather forecast app. 

the whole idea of this assignment is 

When a new city is submitted within the input form: 
1.  insert the value into the query url and run it through ajax

2.  create a button and prepend it to the history list and give it a text and value attribute equal to the name of the city. When the button is clicked, set the attribute as the button’s value and run it through queryURL.

3.  Get the information and use .text() to show the information on info screen. Use moment JS for the date on the title

4.  Get the 5 day forecast and print on a new bootstrap card  
Since uv index is a different api documentation, make a new function inside displaycurrentinfo that takes the longitude and latitude from the response parameter and put them inside uv index api. Print the uv index number and color  then return the function using closure so we can pass the response to uv index function as parameter

5. Use moment JS manipulate add feature to set the future date
