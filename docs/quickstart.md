### **📂 `docs/quickstart.md`**  
**Purpose**: A fast-paced onboarding guide to get developers working with your API immediately.


# ⚡ WeatherBand API Quick Start  
*Get up and running in under 2 minutes.*  

## 1. Get Your API Key (Mocked)  
```bash
# Simulate signing up (no real backend needed)
curl -X POST https://api.weatherband.com/v1/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"your@email.com"}'
```
*Returns:*  
```json
{"api_key": "WB-123456", "rate_limit": "100/day"}
```

## 2. Make Your First Request  
### Basic Forecast (JSON)
```bash
curl "https://api.weatherband.com/v1/forecast?location=Tokyo&api_key=WB-123456"
```

### Retro Mode (Text)
```bash
curl "https://api.weatherband.com/v1/forecast?location=Tokyo&format=retro&api_key=WB-123456"
```

## 3. Subscribe to Alerts  
```bash
curl -X POST https://api.weatherband.com/v1/alerts/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+15551234567",
    "location": "Tokyo",
    "format": "retro",
    "api_key": "WB-123456"
  }'
```

## Next Steps  
- [Explore all API endpoints →](./endpoints.md)  
- [See practical code examples →](./examples.md)  

---
*Pro Tip:* Store your API key in an environment variable:  
```bash
export WB_API_KEY="WB-123456"
# Then use in requests:
curl "https://api.weatherband.com/v1/forecast?location=Tokyo&api_key=$WB_API_KEY"
```
