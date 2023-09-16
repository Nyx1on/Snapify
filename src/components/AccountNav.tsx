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
      : "bg-gray text-gray-800";
  };

  if (!ready) {
    return (
      <>
        <div
          className="text-xl text-center mt-8 font-semibold"
          style={{ color: "gray" }}
        >
          Loading....
        </div>
      </>
    );
  }
  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8 font-semibold">
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
      {/* <Link
        className={`inline-flex gap-1 py-2 px-6 rounded-full ${isLinkActive(
          "my-orders"
        )}`}
        href="/home/account/my-orders"
        onClick={() => setSubpage("my-orders")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="hidden md:inline">My Orders</div>
      </Link> */}
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
