"use client";
import React, { useState } from "react";
import styles from "@/styles/login.module.scss";
import apiClient from "@/helpers/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/user-contex";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useUserContext();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/login", {
        email: email,
        password: password,
      });
      toast("Login successful");
      console.log(res.data);
      setUser(res.data);
      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (err) {
      toast.error("Password does not match. Please try again.");
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default page;
