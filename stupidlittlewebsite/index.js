const Koa = require("koa");

const app = module.exports = new Koa();

app.use(function *() {
    this.body = "Koa says hi!";
});

const port = process.env.PORT || (process.argv[2] || 4567);

if (!module.parent) {
    app.listen(port);
}

console.log(`Application started and listening on port ${port}`);