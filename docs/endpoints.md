# WeatherBand API Endpoints
*Complete reference for JavaScript developers*

## Base URL
```bash
https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1
```

## GET /forecast
Fetch weather data for a location.

### Parameters
| Name | Type | Required | Values | Description |
|------|------|----------|--------|-------------|
| location | string | Yes | Houston, Seattle | Case-sensitive city name |

### JavaScript Example
```javascript
async function getForecast(location) {
  const response = await fetch(
    `https://67ed51b04387d9117bbd31f6.mockapi.io/api/v1/forecast?location=${location}`
  );
  return await response.json();
}

// Usage:
const houstonWeather = await getForecast('Houston');
console.log(houstonWeather.poetic_summary);
```

### Response Format
```json
{
  "id": "1",
  "location": "Houston",
  "temp": 28,
  "conditions": "humid",
  "poetic_summary": "🌡️ Sweltering heat wraps around the Bayou City...",
  "format": "retro"
}
```

### Retro Formatting Example
```javascript
function formatAsRadioBroadcast(data) {
  return `📻 *crackle* WEATHER UPDATE *crackle*\n\n` +
         `CITY: ${data.location}\n` +
         `TEMP: ${data.temp}°C\n` +
         `CONDITIONS: ${data.conditions.toUpperCase()}\n\n` +
         `PROGNOSTICATION:\n"${data.poetic_summary}"\n\n` +
         `*static* END TRANSMISSION *static*`;
}

// Usage:
const seattleData = await getForecast('Seattle');
console.log(formatAsRadioBroadcast(seattleData));
```

## Error Handling
```javascript
try {
  const response = await fetch('/forecast?location=InvalidCity');
  if (!response.ok) throw new Error('API request failed');
  const data = await response.json();
} catch (error) {
  console.error('📡 *static* Error:', error.message);
}
```

## Best Practices
1. **Cache Responses**:
   ```javascript
   const weatherCache = {};
   
   async function getCachedForecast(location) {
     if (!weatherCache[location]) {
       weatherCache[location] = await getForecast(location);
     }
     return weatherCache[location];
   }
   ```

2. **Add Loading States**:
   ```javascript
   async function displayForecast(location) {
     console.log('📡 Tuning in to weather frequencies...');
     const data = await getForecast(location);
     console.log('📻 Transmission received:', data);
   }
   ```

[View interactive examples](./examples.md) | [Back to Quick Start](./quickstart.md)
```