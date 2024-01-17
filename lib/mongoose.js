import mongoose from "mongoose";
let isConnected = false; // Track connection status


export const connectDB = async() => {
  mongoose.set("strictQuery", true);

   if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try{
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log('Connected to MongoDB');
  }catch(error){
    console.log(error.message)
  }
}
