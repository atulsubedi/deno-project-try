

import { readJson } from "https://deno.land/std@0.50.0/fs/mod.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts"

const data = await readJson("./test.json")

const app = new Application();
const router = new Router();

router.get("/", ctx => {
    ctx.response.body = "Welcome to homepage";
})
.get("/book", ctx => {
    ctx.response.body = data;
})
app.use(router.routes());
app.use(router.allowedMethods())

await app.listen("127.0.0.1:8000")
