import express, { Request, Response } from 'express';
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.info(`Country Dashboard API listening on http://localhost:${port}`);
});