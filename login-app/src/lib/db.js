import { MongoClient } from "mongodb";


let client = null;

export async function dbConnect() {

  try {
    if (client) {
      console.log("Connected from previous");
      return client
    } else {
      const conString = process.env.NEXT_PUBLIC_MONGO_URI;

      client = new MongoClient(conString);
      await client.connect();

      console.log("Newly connected");
      return client;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export const disconnect = () => {
  if (client) {
    client.disconnect();
  }
};