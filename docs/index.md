# Welcome to WeatherBand API  
*"Where Houston's humidity meets Seattle's drizzle—now with retro radio flair!"*  

<div class="demo-container">
  <div class="controls">
    <select id="location-select">
      <option value="Houston">Houston</option>
      <option value="Seattle">Seattle</option>
    </select>
    <button onclick="fetchForecast()">Get Forecast</button>
    <label>
      <input type="checkbox" id="retro-format"> Retro Mode
    </label>
  </div>

  <div class="response" id="api-response">
    <!-- Response will appear here -->
  </div>
</div>

<script>
  async function fetchForecast() {
    const location = document.getElementById('location-select').value;
    const isRetro = document.getElementById('retro-format').checked;
    
    try {
      const response = await fetch(
        `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
      );
      const data = await response.json();

      const output = isRetro 
        ? formatRetroResponse(data)
        : formatJsonResponse(data);

      document.getElementById('api-response').innerHTML = output;
    } catch (error) {
      document.getElementById('api-response').innerHTML = 
        `<p class="error">📡 *static* ... Unable to tune in ... *crackle*</p>`;
    }
  }

  function formatRetroResponse(data) {
    return `
      <div class="retro-response">
        <p>📻 <em>*crackle*</em> ... ${data.location} weather report ...</p>
        <p>Temperature: ${data.temp}°C, ${data.conditions}</p>
        <p><em>${data.poetic_summary}</em></p>
        <p><em>*static*</em></p>
      </div>
    `;
  }

  function formatJsonResponse(data) {
    return `
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  }
</script>

<style>
  .demo-container {
    border: 1px solid #eee;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 8px;
  }
  .controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }
  .retro-response {
    font-family: monospace;
    color: #5a3921;
    background: #f5f5dc;
    padding: 1rem;
    border-left: 3px solid #8b4513;
  }
  .error {
    color: #d32f2f;
  }
</style>

## Key Features
- **Real MockAPI.io integration**
- **Toggle between JSON and retro views**
- **Mobile-friendly interface**

[Get Started](./quickstart.md) | [API Reference](./endpoints.md)