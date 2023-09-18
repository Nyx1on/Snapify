"use client";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import React, { useEffect, useState } from "react";
import { AlbumData } from "../../constants/AlbumData";
import Image from "next/image";
import main from "../../../public/images/main.jpg";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import styles from "@/styles/home.module.scss";
import Typewriter from "typewriter-effect";
import SearchBar from "@/components/SearchBar";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { user, setUser } = useUserContext();
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const res = await apiClient.get("/albums/all/get");
        setAlbums(res.data);
        console.log(res.data);
      } catch (e) {}
    };

    getAlbums();
  }, []);

  return (
    <>
      <div className="mb-12 bg-primary -mx-4 py-2 md:py-8 px-4 md:px-32 mt-4 md:flex justify-between">
        <div className="mt-8">
          <div className="text-xl md:text-3xl text-[#10131f] font-bold">
            Welcome {user?.userName} !
          </div>
          <h1 className="font-bold text-[#10131f] text-4xl md:text-5xl md:mb-2 my-2 md:my-8">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Create your own story")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Generate beautiful captions")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-[#222328] text-lg max-w-lg font-regular">
            Unleash the creative potential of AI to craft captivating stories or
            generate mesmerizing captions for your photos.
          </p>
          <button
            className={styles.btn}
            onClick={() => router.push("/home/create-new-story")}
          >
            Create a Story
          </button>
          <button
            className={styles.btn}
            onClick={() => router.push("/home/generate-caption")}
          >
            Generate beautiful captions
          </button>
        </div>
        <div className="relative w-96 h-96">
          <Image
            src={main}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mx-8">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[48px]">
            Community
          </h1>
          <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px]">
            Unlock a World of Imagination through Visual Stories, Crafted by Our
            Creative Community.
          </p>
        </div>
        <div className="my-8 flex items-center">
          <div style={{ flex: "66.6%" }} className="mr-8">
            <SearchBar />
          </div>
          <div style={{ flex: "33.3%" }} className="text-secondary text-xl">
            Sort by
          </div>
        </div>
        <div>
          {albums.length > 0 ? (
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {albums.map((album) => (
                <Card key={album._id} {...album} />
              ))}
            </div>
          ) : (
            <div>No Posts Yet</div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
