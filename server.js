const app = require("./index");
const port = 3000;
const hostname = "127.0.0.1";

const server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = server;