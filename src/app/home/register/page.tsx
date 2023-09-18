"use client";
import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import apiClient from "@/helpers/apiClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RegisterUserData } from "@/constants/RegisterUserData";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [registerUserData, setRegisterUserData] = useState<RegisterUserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    imageURL: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/register", {
        data: registerUserData,
      });
      toast("Registered User Successfully");
      router.push("/home/login");
    } catch (error) {
      toast.error("Email already registered");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedUserData = {
      ...registerUserData,
      [name]: value,
    };

    setRegisterUserData(updatedUserData);
  };

  return (
    <div className="mt-4 grow flex justify-center">
      <div className="mb-16 w-full">
        <h1 className="text-4xl text-center mb-2">Register</h1>
        <form action="" className="max-w-2xl mx-auto" onSubmit={handleRegister}>
          <div className="flex gap-1">
            <div className="flex-1">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={registerUserData.firstName}
                onChange={handleOnChange}
                placeholder="your first name"
                className={styles.inputField}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={registerUserData.lastName}
                onChange={handleOnChange}
                placeholder="your last name"
                className={styles.inputField}
              />
            </div>
          </div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={registerUserData.email}
            onChange={handleOnChange}
            placeholder="youremail@gmail.com"
            className={styles.inputField}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={registerUserData.password}
            onChange={handleOnChange}
            placeholder="your password"
            className={styles.inputField}
          />
          <div className="text-center">
            <input type="submit" value={"Register"} className={styles.btn} />
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
