# 🌟 WeatherBand API Examples  
*Practical use cases for the retro weather API—because forecasts should be fun.*  

---

## **1. Basic Usage**  
### **Get a Forecast (Standard JSON)**  
```bash
curl "https://api.weatherband.com/v1/forecast?location=Paris"
```  
**Response**:  
```json
{
  "location": "Paris, FR",
  "temp": 18,
  "conditions": "sunny",
  "alerts": []
}
```

### **Get a Forecast (Retro Mode)**  
```bash
curl "https://api.weatherband.com/v1/forecast?location=Paris&format=retro"
```  
**Response**:  
```plaintext
📻 *crackle* ... Paris: 18°C, sunny skies ... *static*  
```

---

## **2. Code Integrations**  
### **Python Script**  
```python
import requests

response = requests.get(
  "https://api.weatherband.com/v1/forecast",
  params={"location": "Tokyo", "format": "retro"}
)
print(response.text)  # Output: "📻 *crackle* ... Tokyo: 22°C ..."
```

### **JavaScript (Fetch API)**  
```javascript
fetch("https://api.weatherband.com/v1/forecast?location=New+York&format=retro")
  .then(response => response.text())
  .then(data => console.log(data)); 
  // Output: "📻 *crackle* ... New York: 12°C ..."
```

### **Postman Collection**  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/your-collection-link) *(Replace with your link)*  

---

## **3. Fun Projects**  
### **Discord Bot (Node.js)**  
```javascript
const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', async (msg) => {
  if (msg.content === '!weather') {
    const response = await fetch(
      "https://api.weatherband.com/v1/forecast?location=Berlin&format=retro"
    );
    msg.reply(await response.text()); // Replies with retro forecast!
  }
});
```

### **SMS Alerts (Twilio + Python)**  
```python
from twilio.rest import Client
import requests

weather = requests.get(
  "https://api.weatherband.com/v1/forecast?location=San+Francisco&format=retro"
).text

client = Client("YOUR_TWILIO_SID", "YOUR_TWILIO_AUTH_TOKEN")
client.messages.create(
  body=weather,  # "📻 *crackle* ... San Francisco: 15°C ..."
  from_="+1234567890",
  to="+0987654321"
)
```

---

## **4. Error Handling**  
### **Invalid Location**  
```bash
curl "https://api.weatherband.com/v1/forecast?location=UnknownCity"
```  
**Response**:  
```json
{
  "error": {
    "code": 404,
    "message": "Frequency lost. Location not found.",
    "details": "*static* Check spelling. *crackle*"
  }
}
```

---

## **🚀 Pro Tips**  
- **Retro Mode**: Perfect for chatbots, SMS, or voice apps!  
- **Timezone Support**: Add `&tz=UTC` to requests (e.g., `...forecast?location=London&tz=UTC`).  
- **Rate Limits**: Free tier allows 100 calls/day.  

[Back to API Reference →](./endpoints.md)  
```