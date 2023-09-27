const express = require('express')

const app = express()

app.use(express.json())
const books = [
    {title: 'java programming', id: 1},
    {title: 'cpp programming', id: 2},
    {title: 'c# programming', id: 3},
]

app.get('/',(req,resp)=>{
  resp.send("Welcome to learn RestApi with Node Js");
})

app.listen(8080)