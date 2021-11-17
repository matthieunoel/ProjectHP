import { Response } from "express";
import { Get, JsonController, Res } from "routing-controllers";
import { IRootResult } from "./root.interfaces";
import "reflect-metadata";

@JsonController()
export class RootController {

    constructor(
        // private rootService: RootService
    ) {}

    @Get('/')
    root(@Res() response: Response): IRootResult {
        return {
            name: require('../../package.json').name,
            version: require('../../package.json').version
        }
    }

}