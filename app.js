const express = require('express')
const app = express()

/* When you use nodemon add "start": nodemon app.js in package.json file */ 

app.get('/', function (req, res) {
    const blog = {id: 1, title: "Blog title", description: "Blog description"}
    res.send(blog);
})


app.listen(3001,()=> {
    console.log("port 3000 e baglanıldı");
}) 