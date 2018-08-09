const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

let names = [];
let name = ''
// Read
app.get('/api/hello', (request, response, next)=>{
    const obj = {
        names,
        name,
    }
    response.send(obj)
})
// Read
app.get('/api/name', (request, response, next)=>{
    const obj = {
        name
    }
    response.send(obj)
})

// Create
app.post('/api/hello', (req, res, next)=>{
    names.push(req.body.name);
    const obj = {
        names,
        name
    }

    res.send(obj)
})

// Update
app.put('/api/hello', (req, res, next)=>{
    name = req.body.name;
    const obj = {
        name,
        names
    }
    res.send(obj)
})

// Delete
app.delete('/api/hello', (req, res, next)=>{
    names = [];
    name = '';

    const obj = {
        names,
        name
    }
    res.send(obj)
})

app.listen(8080, ()=>{
    console.log('The server is running on port 8080')
})