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
          <div className="text-base font-semibold py-1 px-8 md:px-8">
            <ul className="flex justify-center items-center gap-2 md:gap-8">
              <li></li>
              <li className="hover:bg-[#eeeeee] px-4 py-2 rounded-full">
                <Link href="/home">
                  <div className="flex justify-center">
                    {/* <HomeIcon /> */}
                    <span className="hidden md:block">Home</span>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-[#eeeeee] px-4 py-2 rounded-full">
                <Link href="/home/about">
                  <div className="flex justify-center">
                    {/* <InfoIcon /> */}
                    <span className="hidden md:block">About</span>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-[#eeeeee] px-4 py-2 rounded-full">
                {!!user ? (
                  <>
                    {" "}
                    <div
                      className="flex justify-center cursor-pointer"
                      onClick={logout}
                    >
                      {/* <LogoutIcon /> */}
                      <span className="hidden md:block">Logout</span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
          <div className="flex gap-2 border border-gray-300 px-4 rounded-full hover:bg-[#eeeeee]">
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
