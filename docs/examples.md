# Advanced JavaScript Examples
*Practical implementations using the WeatherBand API*

## 1. Dynamic Weather Dashboard
```html
<div id="weather-dashboard">
  <h2>WeatherBand Dashboard</h2>
  <div class="city-selector">
    <select id="city-select">
      <option value="Houston">Houston</option>
      <option value="Seattle">Seattle</option>
    </select>
    <button id="refresh-btn">Get Weather</button>
    <label>
      <input type="checkbox" id="retro-toggle"> Retro Mode
    </label>
  </div>
  <div class="weather-display" id="weather-display"></div>
</div>

<script>
  document.getElementById('refresh-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-select').value;
    const retroMode = document.getElementById('retro-toggle').checked;
    
    try {
      const response = await fetch(
        `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${city}`
      );
      const data = await response.json();
      
      const display = document.getElementById('weather-display');
      display.innerHTML = retroMode ? createRetroDisplay(data) : createModernDisplay(data);
      
    } catch (error) {
      document.getElementById('weather-display').innerHTML = 
        `<div class="error">📡 *static* Connection lost: ${error.message}</div>`;
    }
  });

  function createModernDisplay(data) {
    return `
      <div class="modern-card">
        <h3>${data.location} Weather</h3>
        <div class="temp">${data.temp}°C</div>
        <div class="conditions">${data.conditions}</div>
        <p class="summary">${data.poetic_summary}</p>
      </div>
    `;
  }

  function createRetroDisplay(data) {
    return `
      <div class="retro-terminal">
        <div class="scanlines"></div>
        <pre>📻 WEATHERBAND TRANSMISSION RECEIVED

LOCATION: ${data.location}
TEMPERATURE: ${data.temp}°C
CONDITIONS: ${data.conditions.toUpperCase()}

> ${data.poetic_summary}

[END TRANSMISSION]</pre>
      </div>
    `;
  }
</script>

<style>
  #weather-dashboard {
    font-family: sans-serif;
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .city-selector {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }
  
  .modern-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .retro-terminal {
    background: #1a1a1a;
    color: #00ff00;
    padding: 1.5rem;
    position: relative;
    font-family: monospace;
    border-radius: 4px;
  }
  
  .scanlines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 1px,
      rgba(0,255,0,0.05) 1px,
      rgba(0,255,0,0.05) 2px
    );
    pointer-events: none;
  }
</style>
```

## 2. Weather Widget for Websites
```javascript
class WeatherBandWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          max-width: 300px;
        }
        .loading {
          color: #666;
          font-style: italic;
        }
        .error {
          color: #d32f2f;
        }
      </style>
      <div id="widget-content">
        <div class="loading">Loading weather...</div>
      </div>
    `;
  }

  async connectedCallback() {
    const location = this.getAttribute('location') || 'Houston';
    const retro = this.hasAttribute('retro');
    
    try {
      const response = await fetch(
        `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
      );
      const data = await response.json();
      
      this.shadowRoot.getElementById('widget-content').innerHTML = retro
        ? this.createRetroView(data)
        : this.createModernView(data);
        
    } catch (error) {
      this.shadowRoot.getElementById('widget-content').innerHTML = `
        <div class="error">Weather data unavailable</div>
      `;
    }
  }

  createModernView(data) {
    return `
      <h3>${data.location} Weather</h3>
      <div style="font-size: 2rem;">${data.temp}°C</div>
      <div>${data.conditions}</div>
      <p><small>${data.poetic_summary}</small></p>
    `;
  }

  createRetroView(data) {
    return `
      <div style="font-family: monospace; color: #5a3921; background: #f5f5dc; padding: 0.5rem;">
        <div>📻 *crackle*</div>
        <div>${data.location.toUpperCase()} WEATHER</div>
        <div>${data.temp}°C ${data.conditions}</div>
        <div>*${data.poetic_summary}*</div>
        <div>*static*</div>
      </div>
    `;
  }
}

customElements.define('weather-band', WeatherBandWidget);
```

## 3. Using the Web Component
```html
<!-- Modern style -->
<weather-band location="Seattle"></weather-band>

<!-- Retro style -->
<weather-band location="Houston" retro></weather-band>
```

## 4. Error Handling Pattern
```javascript
async function getWeatherWithRetry(location, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(
        `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
      );
      if (!response.ok) throw new Error('API error');
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Usage:
try {
  const weather = await getWeatherWithRetry('Seattle');
  console.log('Weather data:', weather);
} catch (error) {
  console.error('Failed after retries:', error);
}
```

[Back to API Reference](./endpoints.md) | [View Quick Start Guide](./quickstart.md)
```