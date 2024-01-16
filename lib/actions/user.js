import User from "../models/User";
import { connectDB } from "../mongoose";

export const createOrUpdateUser = async(
    id,
    image_url,
    email_addresses, 
    username
    )=>{
    
        try{
            await connectDB();

            const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                image: image_url,
                email: email_addresses[0].email_address,
                username: username,
                },
            },
            { upsert: true, new: true } // if user doesn't exist, create a new one
            );

            await user.save();
            return user;
        } catch (error) {
    console.error(error);
  }
}



export const deleteUser = async (id) => {
  try {
    await connectDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error(error);
  }
};
