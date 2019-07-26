import path from "path";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";

import routes, {Route} from "./routes";


const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "../public"), {maxAge: 31557600000}));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes.forEach((route: Route) => {
    app[route.method](route.url, route.controller.bind(app));
});

export default app;