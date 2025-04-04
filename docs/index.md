# WeatherBand API  
*Interactive weather forecasts with a retro twist*

<div class="interactive-demo">
  <select id="location-select" class="form-control">
    <option value="Houston">Houston</option>
    <option value="Seattle">Seattle</option>
  </select>
  <button id="fetch-button" class="btn">Get Forecast</button>
  <label class="retro-toggle">
    <input type="checkbox" id="retro-checkbox"> Retro Mode
  </label>
</div>

<div id="api-response" class="response-box"></div>

<script>
document.getElementById('fetch-button').addEventListener('click', async () => {
  const location = document.getElementById('location-select').value;
  const isRetro = document.getElementById('retro-checkbox').checked;
  
  try {
    const response = await fetch(
      `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
    );
    const data = await response.json();
    
    const output = isRetro 
      ? `<div class="retro-output">📻 <em>*crackle*</em><br>${data.location}: ${data.temp}°C, ${data.conditions}<br><em>${data.poetic_summary}</em><br><em>*static*</em></div>`
      : `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    
    document.getElementById('api-response').innerHTML = output;
  } catch (error) {
    document.getElementById('api-response').innerHTML = 
      '<div class="error">📡 *static* Connection failed</div>';
  }
});
</script>

<style>
.interactive-demo {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  align-items: center;
}
.response-box {
  border: 1px solid #eee;
  padding: 15px;
  min-height: 100px;
  border-radius: 5px;
}
.retro-output {
  font-family: monospace;
  color: #5a3921;
  line-height: 1.6;
}
.error {
  color: #d32f2f;
}
.btn {
  padding: 5px 15px;
}
</style>

## Key Features
- **Real API Integration**: Live MockAPI.io endpoints
- **Toggle Views**: Switch between JSON and retro formats
- **Error Handling**: Graceful failure states

[Get Started](./quickstart.md) | [API Reference](./endpoints.md)
```
