import express from 'express';
import countries from './countries';
const app = express();
const port = 5000;

app.use(express.json());

app.get('/countries', countries.getAll);
app.get('/countries/:code', countries.getByCode);
app.get('/countries/region/:region', countries.getInRegion);
app.get('/countries/search', countries.search);

app.all('*', (_req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.info(`Country Dashboard API listening on http://localhost:${port}`);
});

export default app;