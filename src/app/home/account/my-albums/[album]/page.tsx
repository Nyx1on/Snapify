"use client";
import apiClient from "@/helpers/apiClient";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlbumData } from "@/constants/AlbumData";

type Props = {};

const page = (props: Props) => {
  const params = useParams();
  const [albumData, setAlbumData] = useState<AlbumData>({
    title: "",
    story: "",
    prompt: "",
    images: [],
    _id: "",
    captions: [],
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
      <div>
        
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Story</h2>
        <p>{albumData.story}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Genre</h2>
        <p>{albumData.prompt}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Created by</h2>
        <p>You</p>
      </div>
    </div>
  );
};

export default page;
