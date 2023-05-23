import mongoose from 'mongoose';



const DBconnection =async ()=>{


    const MONGODB_URL =`mongodb+srv://paipragathi007:file-sharing@cluster0.nj90j0z.mongodb.net/?retryWrites=true&w=majority`;
   try {
     await mongoose.connect(MONGODB_URL,{ useNewUrlParser : true});


     console.log('db connceted successfully');
   } catch(error){
    console.error('error while connecting db', error.message);
   }
}

export default DBconnection;