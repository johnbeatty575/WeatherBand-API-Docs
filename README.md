# WeatherBand API Documentation  
*Houston's heat and Seattle's drizzle—now with interactive JavaScript demos!*  

<!--![WeatherBand Logo](./docs/assets/weatherband-logo.png) logo coming soon... -->

**Key Highlights**:  
 **Realistic Mock API**: Powered by [MockAPI.io](https://mockapi.io/) with Houston/Seattle weather data  
 **Interactive Demos**: JavaScript-powered examples with retro/JSON toggles  
 **Zero Backend Needed**: 100% client-side implementation  
 **Portfolio-Ready**: Clean design with OpenAPI specs and web components  
 **Step-by-Step Guides**: From quick starts to advanced implementations  

**Perfect For**:  
- Technical writers building API doc portfolios  
- Developers learning REST API design  
- Educators teaching API documentation best practices  

### **What’s Included**  
| File/Folder       | Purpose                                  |  
|-------------------|------------------------------------------|  
| `/docs`           | Hosted documentation (GitHub Pages)      |  
| `openapi.yaml`    | Machine-readable API specification       |  
| Web Component     | Reusable `<weather-band>` custom element |  
| MockAPI.io Setup  | Pre-configured Houston/Seattle data      |  


### **Why This Stands Out**  
> Unlike generic API docs, this project demonstrates **real-world technical writing** with:  
> - Client-side interactivity  
> - Error handling examples  
> - Responsive design  
> - Clear user pathways"*  

## Features  
- **Real MockAPI.io Integration**:  
  ```javascript
  fetch('https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=Houston')
    .then(res => res.json())
    .then(data => console.log(data.poetic_summary));
  ```
- **Client-Side Retro Formatting**: Toggle between JSON and vintage radio styles  
- **Web Component**: Drop-in `<weather-band>` widget for websites  
- **Zero Backend**: 100% frontend JavaScript implementation  

## Live Demo
[Interactive Demo](https://johnbeatty575.github.io/WeatherBand-API-Docs/index.html)  
<!--[Documentation Hub](https://johnbeatty575.github.io/WeatherBand-API-Docs/index.md) // working to repair endpoint-->

## Documentation  
| Guide | Description |  
|-------|-------------|  
| [Interactive Demo](./docs/index.html) | Live API playground with retro toggle |  
| [Quick Start](./docs/quickstart.md) | Copy-pasteable JavaScript snippets |  
| [API Reference](./docs/endpoints.md) | Complete endpoint documentation |  
| [Advanced Examples](./docs/examples.md) | Dashboard & web component implementations |  

## Built With  
```text
MockAPI.io    => Live mock endpoints
JavaScript    => Client-side retro formatting
Web Components=> Reusable <weather-band> element
GitHub Pages  => Hosted documentation
```

## Development Setup  
1. Clone the repo:  
   ```bash
   git clone https://github.com/johnbeatty575/WeatherBand-API-Docs.git
   ```
2. Test locally:  
   - Open `docs/index.html` in browser  
   - Use Chrome DevTools to experiment with the API  

## Example Request  
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
**License**: MIT (Free for personal and commercial use)

---
*Documentation by [John Beatty](https://github.com/johnbeatty575/)*  
*Weather data provided by MockAPI.io*
```
