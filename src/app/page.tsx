"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Head from "next/head";
import Header from "@/components/Header";
import { AiFillGithub } from "react-icons/ai";
import apiClient from "@/helpers/apiClient";

export default function Home() {
  const login = async () => {
    try {
      const response = await apiClient.get("/login");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Head>
        <link rel="icon" href="s" />
      </Head>
      <main className="flex min-h-screen items-center justify-between md:flex-row sm:flex-col">
        <Header />
        <div
          className="flex flex-col justify-center align-middle md:h-screen w-full sm:w-1/2 py-24 sm:p-24 z-10"
          style={{ backgroundColor: "#191414", color: "white" }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl py-1 font-lora">
              Elevate Your Music Mood
            </h1>
            <p className="text-1xl md:text-2xl py-4 font-thin text-gray-300">
              Custom Playlists, Artist & Genre Options, and Enriched Spotify
              Profile View
            </p>
            <Button
              title="Login"
              style={{
                fontSize: "1.25rem",
                borderRadius: "1.5rem",
                padding: "0.5rem 2rem",
              }}
              onClick={login}
            />
          </div>
        </div>
        <div
          className="absolute md:block w-full md:w-1/2 md:relative"
          style={{
            backgroundImage: `url("/images/bg3.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "-100px",
            minHeight: "100vh",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#1DB954",
              opacity: "0.3",
            }}
          />
        </div>
        <a
          className="absolute bottom-0 right-0 p-2 cursor-pointer"
          href="https://github.com/Nyx1on/Tuneify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={42} />
        </a>
      </main>
    </>
  );
}
