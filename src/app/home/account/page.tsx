"use client";
import { useUserContext } from "@/context/user-contex";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { user, ready } = useUserContext();

  if (!ready) {
    return (
      <>
        <div className="text-2xl text-center mt-8 font-semibold">
          Cannot Access this page. Please Log in to view your profile.
        </div>
        <div
          className="text-xl text-center mt-8 font-semibold"
          style={{ color: "gray" }}
        >
          Redirecting to Login page....
        </div>
      </>
    );
  }

  if (ready && !user) {
    console.log(ready, user);
    router.push("/home/login");
  }

  return <div>Profile Page</div>;
};

export default page;
