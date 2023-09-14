"use client";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import React, { useEffect, useState } from "react";
import { AlbumData } from "../constants/AlbumData";
import Image from "next/image";
import main from "../../../public/images/main.jpg";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";


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
          <div className="text-6xl">Welcome {user?.name} !</div>
          <h1 className="font-extrabold text-[#222328] text-4xl mb-2">
            Create a Story
          </h1>
          <p className="text-[#ffffff] text-lg max-w-lg">
            Showcase your creativity by creating a captivating story using your
            photos.
          </p>
          <button
            className="mt-4 px-6 py-3 text-primary rounded-lg shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={() => router.push("/home/create-new-story")}
          >
            Create Story
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
