const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const{readdirSync} = require('fs');
const app = express();


require('dotenv').config();

const PORT =process.env.PORT 
//middl
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route)=>{
    app.use('/api/v1',require('./routes/'+route))
})


app.get('/',(req,res)=>{
    res.send('Hello from the server')
})

const server =() =>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
}

server();