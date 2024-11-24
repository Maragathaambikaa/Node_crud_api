// Import Express
const express = require('express');

// Using Node.js `require()`
const mongoose = require('mongoose');

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

//connect to the mongodb
mongoose.connect('mongodb://127.0.0.1:27017/test') //mongodb://localhost:27017- connected ..if value changes -not connected
//similar to try and catch block
  .then(() => {console.log('Connected!');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    
  }).catch(()=>console.log('connection error'));



// Start the server
