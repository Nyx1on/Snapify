"use client";
import { useUserContext } from "@/context/user-contex";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { user, setUser } = useUserContext();
  return (
    <>
      <div>Hello {user ? user.name : ""}</div>
    </>
  );
};

export default page;
