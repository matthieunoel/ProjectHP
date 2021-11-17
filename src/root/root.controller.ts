import { Get, Res } from "routing-controllers"
import { IRootResult } from "./root.interfaces"
import { RootService } from "./root.service"

export class RootController {
    constructor(private rootService: RootService) {}

    @Get('/')
    root(@Res() response: Response): IRootResult {
        return {
            name: require('../../package.json').name,
            version : require('../../package.json').version,
            status : "Ok"
        }
    }

}