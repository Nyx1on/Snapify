"use client";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const getAlbumData = async () => {
      try {
        const res = await apiClient.get("/album/get");
        console.log(res.data);
        setAlbumData(res.data);
      } catch (err) {}
    };

    getAlbumData();
  }, []);

  return (
    <div className="w-full">
      <div className="text-center">
        <Link href={"/home/account/my-albums/new"}>
          {" "}
          <Button title="Create New Album" style={{ color: "white" }}>
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        {albumData.length > 0 &&
          albumData.map((album) => (
            <div key={album._id}>
              <Link
                href={"/home/account/album/" + album._id}
                className="flex cursor-pointer gap-4 p-4 bg-secondary rounded-2xl"
              >
                <div className="flex w-32 h-32 grow bg-secondary shrink-0">
                  {/* <PlaceImg place={album} /> */}
                </div>
                <div className="grow-0 shrink">
                  <h2 className="text-xl">{album.title}</h2>
                  <p className="text-sm mt-2">{album.description}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
