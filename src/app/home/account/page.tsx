"use client";
import Button from "@/components/Button";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { user, ready } = useUserContext();

  if (!ready) {
    return null;
  }

  const logout = async () => {
    try {
      await apiClient.get("/logout");
      router.push("/home/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center max-w-lg mx-auto">
      Logged in as {user?.name} ({user?.email})<br />
      <Button
        title="Logout"
        onClick={() => logout()}
        className="primary max-w-sm mt-2"
        style={{ color: "white", width: "100%" }}
      />
    </div>
  );
};

export default page;
