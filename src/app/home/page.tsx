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
      <div className="mb-12 bg-primary -mx-4 py-8 px-32 mt-8 flex justify-between">
        <div className="mt-8">
          <div className="text-3xl text-[#242424] font-bold">
            Welcome {user?.name} !
          </div>
          <h1 className="font-bold text-[#222328] text-5xl mb-2 my-8">
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
      <div>
        <h1 className="font-extrabold text-[#222328] text-[48px]">Community</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px]">
          Unlock a World of Imagination through Visual Stories, Crafted by Our
          Creative Community.
        </p>
      </div>
      <div>
        {albums.length > 0 ? <Card albums={albums} /> : <div>No Posts Yet</div>}
      </div>
    </>
  );
};

export default page;
