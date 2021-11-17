import { Response, Request } from "express";

const express = require('express');

export class Config {
    public static data = require('../appConfig.json');
}

const app = express();
app.get('/', (request: Request, response: Response) => {
    response.send("Ok!");
    response.end();
})

app.listen(Config.data.Port, Config.data.Ip, () => {
    console.log(`Server successfullyt started on ${Config.data.Ip}:${Config.data.Port}.`);
})