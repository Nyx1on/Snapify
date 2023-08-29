import HeaderMain from "@/components/HeaderMain";
import React from "react";
import styles from "@/styles/login.module.scss";
import Button from "@/components/Button";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-2">Login</h1>
        <form action="" className="max-w-2xl mx-auto">
          <label htmlFor="">Your email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="yourmail@gmail.com"
            className={styles.inputField}
          />
          <label htmlFor="">Your Pssword</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="yourpassword"
            className={styles.inputField}
          />
          <div className="text-center">
            <Button
              title="Login"
              style={{
                fontSize: "1.25rem",
                borderRadius: "1.5rem",
                padding: "0.5rem 2rem",
                color: "white",
                width: "100%",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
