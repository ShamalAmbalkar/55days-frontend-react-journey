async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultDiv = document.getElementById('weatherResult');
  resultDiv.innerHTML = 'Loading...';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const { name, main, weather } = data;

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p>${weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}