"use client";
import React, { useState } from "react";
import styles from "@/styles/login.module.scss";
import HeaderMain from "@/components/HeaderMain";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const page = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const res = await apiClient.post("/login", {
        email: email,
        password: password,
      });
      console.log(res.data);
      toast("Login successful");
      toast;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-2">Login</h1>
        <form action="" className="max-w-2xl mx-auto" onSubmit={handleLogin}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@gmail.com"
            className={styles.inputField}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            className={styles.inputField}
          />
          <div className="text-center">
            <input type="submit" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
