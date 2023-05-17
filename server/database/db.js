import mongoose from 'mongoose';


const DBConnection =async()=>{
    const MONDB_URI=`mongodb+srv://user:ritul@sharehere.rieixhw.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONDB_URI,{useNewUrlParser:true});
       console.log('database connected successfully');

    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}
export default DBConnection;