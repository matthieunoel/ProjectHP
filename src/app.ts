import 'reflect-metadata'
import { createExpressServer, useContainer } from 'routing-controllers'
import { RootController } from './root/root.controller'
const express = require('express')
import Container from 'typedi'

useContainer(Container)

export class Config {
    public static data = require('../config.json');
} 

const app = createExpressServer({
    cors: true,
    controllers: [RootController]
})

app.use('/static', express.static('src/static'))

app.listen(Config.data.Port, Config.data.Ip)