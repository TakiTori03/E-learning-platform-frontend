"use server";
import mongoose from "mongoose";
//singleton
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) throw new Error("MongoDB is not set!");
  if (isConnected) {
    console.log("MONGODB IS CONNECTED!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "E_Learning",
    });
    isConnected = true;
    console.log("Using new database connection!");
  } catch (error) {
    console.log("Error while connect database");
  }
};
