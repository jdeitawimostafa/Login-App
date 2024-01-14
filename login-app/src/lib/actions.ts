"use server";

import { State } from "./definitions";
import { dbConnect } from "./db";
import { isSamePass } from "@/helpers/helpers";

export async function doLogin(prevState: State, formData: FormData) {
  const userName = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!userName && !password) {
    return {
      message: "Missing fields",
    };
  } else {
    const client: any = await dbConnect();
    const db = client.db("Users_db");
    const usersCollection = db.collection("Users");
    const user = await usersCollection.findOne({ username: userName });
    if (user) {
      let isSamePassword = await isSamePass(password, user.password);
      if (user.username === userName && isSamePassword) {
        return {
          message: true,
        };
      } else {
        return {
          message: "Wrong username or password",
        };
      }
    } else {
      return {
        message: "Username doesn't exist",
      };
    }
  }
}
