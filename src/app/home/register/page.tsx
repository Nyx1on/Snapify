"use client";
import React, { useState } from "react";
import styles from "@/styles/login.module.scss";
import apiClient from "@/helpers/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/register", {
        name: name,
        email: email,
        password: password,
      });
      toast("Registered User Successfully");
      router.push("/home/login");
    } catch (error) {
      toast.error("Email already registered");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-2">Register</h1>
        <form action="" className="max-w-2xl mx-auto" onSubmit={handleRegister}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
            className={styles.inputField}
          />
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
        <div className={styles.subtext}>
          Already an user?{" "}
          <Link href="login">
            <span style={{ textDecoration: "underline" }}>Login</span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
