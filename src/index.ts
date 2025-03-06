import express, { Express, Request, Response } from "express";
import {logger} from "@utils/logger";

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    console.log(logger());
    res.send("Server starting");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});