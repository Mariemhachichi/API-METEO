"use strict";

var APIKEY = '1d3bff399ff7fa0cb23502a124868eba';

var apiCall = function apiCall(city) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d3bff399ff7fa0cb23502a124868eba&units=metric&lang=fr';
  fetch(url).then(function (response) {
    return response.json().then(function (data) {
      console.log(data);
      document.querySelector('#city').innerHTML = data.name;
      document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
      document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
      document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    });
  });
};

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  var ville = document.querySelector('#inputCity').Value;
  apiCall(ville);
});