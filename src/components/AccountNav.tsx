"use client";
import { useUserContext } from "@/context/user-contex";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonIcon from "@mui/icons-material/Person";

type Props = {};

const AccountNav = (props: Props) => {
  const router = useRouter();
  const { user, ready } = useUserContext();
  const [subpage, setSubpage] = useState("profile");

  if (ready && !user) {
    console.log(ready, user);
    router.push("/home/login");
  }

  const isLinkActive = (linkSubpage: string) => {
    return subpage === linkSubpage
      ? "bg-primary text-white"
      : "bg-gray text-gray-800 hover:bg-[#eeeeee]";
  };

  if (!ready) {
    return (
      <>
        <div
          className="text-xl text-center font-semibold"
          style={{ color: "gray" }}
        >
          Loading....
        </div>
      </>
    );
  }
  return (
    <nav className="w-full flex justify-center gap-2 mb-8 font-semibold">
      <Link
        className={`inline-flex gap-1 py-2 px-6 rounded-full ${isLinkActive(
          "profile"
        )}`}
        href="/home/account"
        onClick={() => setSubpage("profile")}
      >
        <PersonIcon />
        <div className="hidden md:inline">My profile</div>
      </Link>
      <Link
        className={`inline-flex gap-1 py-2 px-6 rounded-full ${isLinkActive(
          "my-albums"
        )}`}
        href="/home/account/my-albums"
        onClick={() => setSubpage("my-albums")}
      >
        <CollectionsIcon />
        <div className="hidden md:inline">My Albums</div>
      </Link>
    </nav>
  );
};

export default AccountNav;
