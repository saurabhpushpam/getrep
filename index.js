const express= require('express');
const app= express();
const http = require("http");
app.use(express.json());

const mongoose = require('mongoose');
 mongoose.connect("mongodb://127.0.0.1:27017/getapi");

// get api

const getroute= require("./routes/getRoutes");
app.use('/api', getroute);



 app.listen(8000, function(){
     console.log('server is running');
 });



//  const PORT = 8000;
// // const DB = "mongodb+srv://munna572000:Munna686622@salon.fboq520.mongodb.net/Booking?retryWrites=true&w=majority";

// const DB= "mongodb+srv://spuspam111:Sp123456@cluster0.0taaaup.mongodb.net/getapi?retryWrites=true&w=majority";
//  mongoose.connect(DB)
//      .then(() => {
//          console.log("Connected to MongoDB");
//          const server = http.createServer(app);
//          server.listen(PORT, () => {
//              console.log(`Server is running on :${PORT}`);
//          });
//      })
//      .catch(error => {
//          console.error("Error connecting to MongoDB:", error);
//      });
