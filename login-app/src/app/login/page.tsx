"use client";
import styles from "./page.module.css";

import { useFormState } from "react-dom";
import { doLogin } from "@/lib/actions";


export default function Page() {
  const initialState = { message: null, errors: {} };

  let DoLogin = doLogin as any;

  const [state, dispatch] = useFormState(DoLogin, initialState);

  return (
    <div className={styles.loginPageContainer}>
      <p className={styles.loginTitle}>Welcome to login page</p>
      <form action={dispatch}>
        <div className={styles.formContainer}>
          <div className={styles.fieldContainer}>
            <label htmlFor="username">Username</label>
            <input
              className={styles.inputField}
              type="text"
              name="username"
              id="username"
              placeholder="Please enter a username"
            />
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.inputField}
              type="password"
              name="password"
              id="password"
              placeholder="Please enter a password"
            />
          </div>
          <button
            //onClick={() => HitDb()}
            className={styles.loginAnchor}
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <>
        {state.message === true
          ? alert("Login successfully")
          : state.message
          ? alert(state.message)
          : ""}
      </>
    </div>
  );
}
