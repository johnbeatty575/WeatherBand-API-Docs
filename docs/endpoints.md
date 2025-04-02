### **📂 `docs/endpoints.md`**  
**Purpose**: Comprehensive API reference for all endpoints and parameters.

# 📡 WeatherBand API Endpoints  
*Complete technical reference for all API capabilities.*  

---

## **Base URL**  
https://api.weatherband.com/v1

---

## **🔹 GET /forecast**  
Get current weather conditions for a location.  

### **Parameters**  
| Name        | Type     | Required | Default | Description |  
|-------------|----------|----------|---------|-------------|  
| `location`  | string   | Yes      | -       | City name or `latitude,longitude` |  
| `format`    | enum     | No       | `json`  | `json` or `retro` |  
| `units`     | enum     | No       | `metric`| `metric` or `imperial` |  
| `api_key`   | string   | Yes      | -       | Your API key |  

### **Examples**  
**JSON Response**  
```bash
curl "https://api.weatherband.com/v1/forecast?location=London&api_key=WB-123456"
```  
```json
{
  "location": "London, UK",
  "temperature": 15.5,
  "conditions": "cloudy",
  "humidity": 82,
  "wind": {
    "speed": 12,
    "direction": "SW"
  }
}
```

**Retro Response**  
```bash
curl "https://api.weatherband.com/v1/forecast?location=London&format=retro&api_key=WB-123456"
```  
```plaintext
📻 *static* ... London calling! 16°C and cloudy, with a southwesterly breeze at 12kph... *crackle* ...
```

---

## **🔸 POST /alerts/subscribe**  
Subscribe to weather alert notifications.  

### **Request Body**  
```json
{
  "phone": "+1234567890",
  "location": "Berlin",
  "format": "retro",
  "api_key": "WB-123456"
}
```

### **Response**  
```json
{
  "status": "success",
  "message": "Subscribed to Berlin weather alerts",
  "alert_preference": "retro"
}
```

---

## **🔹 GET /historical**  
*(Coming soon!)* Retrieve past weather data.  

---

## **🔴 Error Responses**  
| Code | Error                | Resolution |  
|------|----------------------|------------|  
| 401  | Invalid API key      | Check your `api_key` parameter |  
| 404  | Location not found   | Verify location spelling |  
| 429  | Rate limit exceeded  | Upgrade plan or wait |  

[Explore practical examples →](./examples.md)  
```
