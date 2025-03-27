import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.weatherband.com/v1/forecast', (req, res, ctx) => {
    const location = req.url.searchParams.get('location') || 'Berlin';
    const isRetro = req.url.searchParams.get('format') === 'retro';
    
    return isRetro 
      ? res(
          ctx.text(`📻 *crackle* ... ${location}: 14°C, partly cloudy ... *static*`)
        ) 
      : res(
          ctx.json({ 
            location, 
            temp: 14, 
            conditions: "partly_cloudy",
            alerts: [] 
          })
        );
  }),

  rest.post('https://api.weatherband.com/v1/alerts/subscribe', (req, res, ctx) => {
    return res(
      ctx.json({ 
        success: true, 
        message: `Subscribed to ${req.body.location} alerts.` 
      })
    );
  })
];