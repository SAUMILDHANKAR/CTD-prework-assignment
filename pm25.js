function pm25Data() {

  const apiUrl25 = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm2_5';
  const outputElement25 = document.getElementById('output25');
  
  
  fetch(apiUrl25)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display data in an HTML element
      document.getElementById('output25P').innerText += data.hourly.pm2_5.splice(0,10);
      //console.log(data.hourly.pm2_5)
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
