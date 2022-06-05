import * as express from "express";
import { log } from "../logger";

var app = express.default();

export function load_express_api(): void  {
	const port = 8080; // TODO: read from config or something;
	
	app.use((req, res, next) => {
		log("express", JSON.stringify({
			url: req.url,
			body: req.body,
			ip: req.ip,
			ips: req.ips,
			headers: req.headers
		}));
		next();
	});

	app.use(express.static(process.cwd() + "/public-src"));
	app.use(express.json());

	app.get("/hello", (req, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => {
		log("express", `Server listening on port ${port}`);
	});
}