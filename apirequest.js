function pm10Data() {

const apiUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10';
const outputElement = document.getElementById('output');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Display data in an HTML element
    document.getElementById('output').style.display = "inline";
    document.getElementById('output').innerText = "pm10 values for current hour and forecast for next 9 hrs => " + data.hourly.pm10.splice(0,10);
    document.getElementById('output25P').innerText = null;
    document.getElementById('output25').style.display = "inline";
    document.getElementById('output25').innerText = "Click for pm25 data";
    document.getElementById('output10').style.display = "none";
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
