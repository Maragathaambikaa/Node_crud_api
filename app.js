// Import Express
const express = require('express');

// Initialize the app
const app = express();

// Define a port
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});



function demo(req,res){
    res.send("Hi");
}

app.get('/d',demo);

//post
app.post('/post_test',(req,res)=>
{
    res.send("Hello world");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
