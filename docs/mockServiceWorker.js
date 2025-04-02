// docs/mockServiceWorker.js
import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get('https://api.weatherband.com/v1/forecast', (req, res, ctx) => {
    const isRetro = req.url.searchParams.get('format') === 'retro';
    return isRetro
      ? res(ctx.text("📻 *crackle* ... 14°C, windy ... *static*"))
      : res(ctx.json({ location: "Berlin", temp: 14 }));
  })
);

worker.start();