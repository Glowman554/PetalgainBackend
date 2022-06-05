import { log } from "./logger";
import { load_express_api } from "./api/express";

async function main() {
	log("main", "Hello World!");

	load_express_api();
}

main();