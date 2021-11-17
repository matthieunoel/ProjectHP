import { createExpressServer } from "routing-controllers";
import { RootController } from "./root/root.controller";

export class Config {
    public static data = require('../appConfig.json');
}

const app = createExpressServer({
    cors: Config.data.Cors,
    controllers: [RootController]
  })

app.listen(Config.data.Port, Config.data.Ip, () => {
    console.log(`Server successfullyt started on ${Config.data.Ip}:${Config.data.Port}.`);
})