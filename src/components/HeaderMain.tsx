"use client";
import React from "react";
import Link from "next/link";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import { useUserContext } from "@/context/user-contex";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import apiClient from "@/helpers/apiClient";
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {};

const HeaderMain = (props: Props) => {
  const { user, setUser } = useUserContext();
  const router = useRouter();

  const logout = async () => {
    try {
      await apiClient.get("/logout");
      router.push("/home/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4">
      <header className="flex justify-between">
        <Link href="/" className="flex gap-1 justify-center items-center">
          <LensBlurIcon fontSize="large" />
          <span className="font-bold text-3xl hidden md:inline">Snapify</span>
        </Link>
        <div className="flex">
          <div className="text-base font-semibold py-2 px-4 md:px-8">
            <ul className="flex justify-center items-center gap-2 md:gap-8">
              <li></li>
              <li>
                <Link href="/home">
                  <div className="flex justify-center">
                    <HomeIcon />
                    <span className="hidden md:block">Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/home/about">
                  <div className="flex justify-center">
                    <InfoIcon />
                    <span className="hidden md:block">About</span>
                  </div>
                </Link>
              </li>
              <li>
                {!!user ? (
                  <>
                    {" "}
                    <div
                      className="flex justify-center cursor-pointer"
                      onClick={logout}
                    >
                      <LogoutIcon />
                      <span className="hidden md:block">Logout</span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 border border-gray-300 py-2 px-4 rounded-full">
            {" "}
            {/* <div>
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
          </div> */}
            {/* <div className="bg-gray-300 text-white">
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
          </div> */}
            <div className="flex justify-center items-center">
              <AccountCircleIcon />
              <span className="text-lg font-semibold px-2">
                {!!user ? (
                  <>
                    <Link href="/home/account">{user?.userName}</Link>
                  </>
                ) : (
                  <>
                    <Link href="/home/login">Login</Link>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;
