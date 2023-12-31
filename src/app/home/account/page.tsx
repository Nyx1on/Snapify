"use client";
import Button from "@/components/Button";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import { RegisterUserData } from "@/constants/RegisterUserData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();

  const { user, ready } = useUserContext();

  if (!ready) {
    return null;
  }

  const [updateUserData, setUpdateUserData] = useState<RegisterUserData>({
    firstName: user?.firstName,
    lastName: user?.lastName,
    userName: user?.userName,
    email: user?.email,
    imageURL: user?.imageURL,
  });

  const updateUser = async () => {
    try {
      const res = await apiClient.post("/profile/update", updateUserData);
    } catch (err) {}
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newUserData = {
      ...updateUserData,
      [name]: value,
    };

    setUpdateUserData(newUserData);
  };

  return (
    <div className="px-8 md:px-0">
      <h1 className="text-4xl text-center">
        <div className="flex justify-center gap-2">
          <EditIcon fontSize="large" />
          <span>Edit your details</span>
        </div>
      </h1>
      <div className="mb-16 w-full">
        <form action="" className="max-w-2xl mx-auto">
          <div
            className="text-center"
            style={{ fontSize: "128px" }}
            onSubmit={updateUser}
          >
            <AccountCircleIcon fontSize="inherit" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={updateUserData.firstName}
              onChange={handleOnChange}
              placeholder="your first name"
              className={styles.inputField}
            />

            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={updateUserData.lastName}
              onChange={handleOnChange}
              placeholder="your last name"
              className={styles.inputField}
            />
          </div>
          <label htmlFor="email">Your User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={updateUserData.userName}
            onChange={handleOnChange}
            placeholder="yourusername"
            className={styles.inputField}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={updateUserData.email}
            onChange={handleOnChange}
            placeholder="youremail@gmail.com"
            className={styles.inputField}
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={updateUserData.password}
            onChange={handleOnChange}
            placeholder="your new password"
            className={styles.inputField}
          />
          <div className="text-center">
            <input type="submit" value={"Update"} className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
