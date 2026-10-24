const express = require('express'); 

const app = express();
const hostname = '127.0.0.1'; // same as local
const port = 3000;

app.use(express)

app.get('/test',(request, response)=>{
    response.send("Hello YOUSSEF");
})
app.listen(port, hostname, ()=>{
    console.log('server is running at ${hostname}:${port}')
});

console.log("Hello world");