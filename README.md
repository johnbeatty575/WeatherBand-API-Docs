# 📻 WeatherBand API Documentation  
*Houston's heat and Seattle's drizzle—now with interactive JavaScript demos!*  

<!--![WeatherBand Logo](./docs/assets/weatherband-logo.png) logo coming soon... -->

## 🌟 Features  
- **Real MockAPI.io Integration**:  
  ```javascript
  fetch('https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=Houston')
    .then(res => res.json())
    .then(data => console.log(data.poetic_summary));
  ```
- **Client-Side Retro Formatting**: Toggle between JSON and vintage radio styles  
- **Web Component**: Drop-in `<weather-band>` widget for websites  
- **Zero Backend**: 100% frontend JavaScript implementation  

## 🚀 Try It Live  
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/web-platform-jsxqef?file=index.html)  
*Example dashboard using the WeatherBand API*

## 📚 Documentation  
| Guide | Description |  
|-------|-------------|  
| [Interactive Demo](./docs/index.md) | Live API playground with retro toggle |  
| [Quick Start](./docs/quickstart.md) | Copy-pasteable JavaScript snippets |  
| [API Reference](./docs/endpoints.md) | Complete endpoint documentation |  
| [Advanced Examples](./docs/examples.md) | Dashboard & web component implementations |  

## 🛠 Built With  
```text
MockAPI.io    => Live mock endpoints
JavaScript    => Client-side retro formatting
Web Components=> Reusable <weather-band> element
GitHub Pages  => Hosted documentation
```

## 💻 Development Setup  
1. Clone the repo:  
   ```bash
   git clone https://github.com/yourusername/WeatherBand-API-Docs.git
   ```
2. Test locally:  
   - Open `docs/index.html` in browser  
   - Use Chrome DevTools to experiment with the API  

## 📡 Example Request  
```javascript
// Get Seattle's poetic forecast
async function getSeattleWeather() {
  const response = await fetch(
    'https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=Seattle'
  );
  const data = await response.json();
  return `📻 *crackle* ${data.poetic_summary} *static*`;
}
```

---
*Documentation by [John Beatty](https://github.com/johnbeatty575/)*  
*Weather data provided by MockAPI.io*
```