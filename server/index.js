import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
//import DBConnection from './database/db.js';
import mongoose from 'mongoose';

const app=express();

app.use(cors());
app.use('/',router);
//const PORT=8000;

 //DBConnection;
 const DB=`mongodb+srv://user:ritul@sharehere.rieixhw.mongodb.net/?retryWrites=true&w=majority`;
 mongoose.connect(DB,{
    useNewUrlParser:true,
   //useCreateIndex:true,
    useUnifiedTopology:true,
  // useFindAndModify:false,
})
.then(app.listen(8000))
.then(()=>console.log("connect.....mm......."))
.catch((err)=>console.log(err));

//app.listen(PORT,()=>console.log(`server ${PORT}`));