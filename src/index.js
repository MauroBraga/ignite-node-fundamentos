const express = require('express');

const app = express();

app.get("/courses", (req, resp) => {
    return resp.json(['curso1', 'curso2', 'curso3']);
});

app.post("/courses", (req, resp) => {
    return resp.json(['curso1', 'curso2', 'curso3', 'curso4']);
});

app.put("/courses/:id", (req, resp) => {
    
    return resp.json(['curso6', 'curso2', 'curso3', 'curso4']);
});

app.patch("/courses/:id", (req, resp) => {
    
    return resp.json(['curso6', 'curso7', 'curso3', 'curso4']);
});

app.delete("/courses/:id", (req, resp) => {
    
    return resp.json(['curso6', 'curso7',  'curso4']);
});

app.listen(3333);