"use client";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  const { user, setUser } = useUserContext();

  return (
    <>
      <div>Hello {user?.name} </div>
    </>
  );
};

export default page;
