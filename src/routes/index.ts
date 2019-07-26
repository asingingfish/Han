import {Request, Response} from "express";

interface Route {
    method: RequestMethod;
    url: string;
    controller(req: Request, res: Response): any;
}

enum RequestMethod {
    GET = "get",
    POST = "post"
}

const home: Route = {
    method: RequestMethod.GET,
    url: "/",
    controller: function (req: Request, res: Response) {
        res.render("index", {
            title: "index"
        });
    }
};

const routes: Route[] = [home];


export default routes;

export {
    Route,
    RequestMethod
}