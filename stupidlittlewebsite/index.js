const Koa = require("koa");

const app = new Koa();

app.use(function *() {
    this.body = "Koa says hi!";
});

const port = process.env.PORT || (process.argv[2] || 4567);
app.listen(port);

console.log(`Application started and listening on port ${port}`);