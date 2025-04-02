# WeatherBand API Quick Start  
*Get started in minutes with our interactive examples.*

## 1. Basic API Request (JavaScript)

```html
<!-- Include this in your HTML -->
<button onclick="fetchWeather('Houston')">Get Houston Forecast</button>
<pre id="weather-output"></pre>

<script>
  async function fetchWeather(location) {
    const response = await fetch(
      `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
    );
    const data = await response.json();
    document.getElementById('weather-output').textContent = 
      JSON.stringify(data, null, 2);
  }
</script>
```

## 2. Retro Mode Implementation

```javascript
function formatRetro(forecast) {
  return `📻 *crackle*\nLocation: ${forecast.location}\n` +
         `Temp: ${forecast.temp}°C\n` +
         `Conditions: ${forecast.conditions}\n` +
         `*${forecast.poetic_summary}*\n` +
         `*static*`;
}

// Usage:
const response = await fetch('https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=Seattle');
const data = await response.json();
console.log(formatRetro(data));
```

## 3. Complete Example (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>WeatherBand Demo</title>
  <style>
    .retro { 
      font-family: monospace;
      white-space: pre;
      background: #f5f5dc;
      padding: 1rem;
      border-left: 3px solid #8b4513;
    }
  </style>
</head>
<body>
  <select id="city-select">
    <option value="Houston">Houston</option>
    <option value="Seattle">Seattle</option>
  </select>
  <button onclick="getWeather()">Get Forecast</button>
  <div id="output" class="retro"></div>

  <script>
    async function getWeather() {
      const city = document.getElementById('city-select').value;
      const response = await fetch(
        `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${city}`
      );
      const data = await response.json();
      
      document.getElementById('output').textContent = formatRetro(data);
    }

    function formatRetro(forecast) {
      return `📻 *crackle*\n=== ${forecast.location} ===\n` +
             `Temperature: ${forecast.temp}°C\n` +
             `Conditions: ${forecast.conditions}\n\n` +
             `Forecast: ${forecast.poetic_summary}\n` +
             `*static*`;
    }
  </script>
</body>
</html>
```

## Next Steps
- [Explore API endpoints](./endpoints.md)
- [See more examples](./examples.md)

<small>Pro Tip: Use Chrome DevTools to test these snippets directly!</small>
```