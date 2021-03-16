const { request, json } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (req, resp) => {
    const query = req.query;
    console.log(query);
    return resp.json(['curso1', 'curso2', 'curso3']);
});

app.post("/courses", (req, resp) => {
    const body = req.body;
    console.log(body);
    return resp.json(['curso1', 'curso2', 'curso3', 'curso4']);
});

app.put("/courses/:id", (req, resp) => {
    const  { id }= req.params;
    console.log(id);
    return resp.json(['curso6', 'curso2', 'curso3', 'curso4']);
});

app.patch("/courses/:id", (req, resp) => {
    
    return resp.json(['curso6', 'curso7', 'curso3', 'curso4']);
});

app.delete("/courses/:id", (req, resp) => {
    
    return resp.json(['curso6', 'curso7',  'curso4']);
});

app.listen(3333);