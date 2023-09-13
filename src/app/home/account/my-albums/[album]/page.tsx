"use client";
import apiClient from "@/helpers/apiClient";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlbumData } from "@/app/constants/AlbumData";

type Props = {};

const page = (props: Props) => {
  const params = useParams();
  const [albumData, setAlbumData] = useState<AlbumData>({
    title: "",
    description: "",
    genre: "",
    price: "",
    images: [],
    _id: "",
  });

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const res = await apiClient.get(`/album/get/${params.album}`);
        setAlbumData(res.data);
        console.log(res.data);
      } catch (e) {}
    };

    fetchAlbumData();
  }, [params.album]);

  return (
    <div className="mt-4 bg-primary -mx-4 px-8 pt-8">
      <h1 className="text-6xl font-semibold mb-4">{albumData.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p>{albumData.description}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Genre</h2>
            <p>{albumData.genre}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Created by</h2>
            <p>You</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;