const apiUrl = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10,pm2_5';
const outputElement = document.getElementById('output');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //console.log(response);
    
    //console.log(response.json());
    //document.getElementById('output').innerText += response.elevation;
    
    //document.getElementById('output').innerText += response.json();
    return response.json();
  })
  .then(data => {
    // Display data in an HTML element
    document.getElementById('output').innerText += data.hourly.pm10;
    document.getElementById('output').innerText += data.hourly.pm2_5;
    
    console.log(data.elevation);
    //outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
