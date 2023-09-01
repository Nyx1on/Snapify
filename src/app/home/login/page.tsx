"use client";
import React, { useState } from "react";
import styles from "@/styles/login.module.scss";
import HeaderMain from "@/components/HeaderMain";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";

type Props = {};

const page = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await apiClient.get("/register");
    console.log(res.data);
  };

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-2">Login</h1>
        <form action="" className="max-w-2xl mx-auto" onSubmit={loginUser}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setName(e.target.value)}
            placeholder="youremail@gmail.com"
            className={styles.inputField}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setName(e.target.value)}
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