"use client";
import React from "react";
import Link from "next/link";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import { useUserContext } from "@/context/user-contex";

type Props = {};

const HeaderMain = (props: Props) => {
  const { user, setUser } = useUserContext();
  return (
    <div>
      <header className="flex justify-between">
        <Link href="/home" className="flex gap-1">
          <LensBlurIcon fontSize="large" />
          <span className="font-bold text-xl hidden md:inline">Snapify</span>
        </Link>
        <div
          className="flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300"
          style={{ backgroundColor: "white" }}
        >
          <input
            type="text"
            className="border-none outline-none w-full"
            // style={{ backgroundColor: "inherit" }}
          />
          <button className="bg-primary text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4s"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex  gap-2 border border-gray-300 py-2 px-4 rounded-full">
          <div>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="bg-gray-300 text-white">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <span>
            {!!user ? (
              <>
                <Link href="/home/account">{user?.name}</Link>
              </>
            ) : (
              <>
                <Link href="/home/login">Login</Link>
              </>
            )}
          </span>
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;
