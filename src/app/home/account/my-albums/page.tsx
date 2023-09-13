"use client";
import { AlbumData } from "@/app/constants/AlbumData";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [albumList, setAlbumList] = useState<AlbumData[]>([]);

  useEffect(() => {
    const getAlbumsList = async () => {
      try {
        const res = await apiClient.get("/albums/list/get");
        console.log(res.data);
        setAlbumList(res.data);
      } catch (err) {}
    };

    getAlbumsList();
  }, []);

  return (
    <div className="w-full">
  <div className="text-center mt-8">
    <Link href={"/home/account/my-albums/new"}>
      <Button style={{ color: "white" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Create New Story
      </Button>
    </Link>
  </div>
  <div className="mt-8 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {albumList.length > 0 &&
      albumList.map((album) => (
        <div
          key={album._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Link
            href={"/home/account/my-albums/" + album._id}
            className="flex cursor-pointer"
          >
            <div className="w-32 h-32 bg-secondary">
              <Image
                src={`http://localhost:8000/uploads/${album.images[0]}`}
                alt="image"
                height={128}
                width={128}
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{album.title}</h2>
                <p className="text-sm mt-2">{album.description}</p>
              </div>
              <div className="mt-4">
                <span className="text-secondary text-sm">
                  {album.images.length} Photos
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
  </div>
</div>
  );
};

export default page;
