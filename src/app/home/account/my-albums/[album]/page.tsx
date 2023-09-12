"use client";
import apiClient from "@/helpers/apiClient";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const params = useParams();
  const [albumData, setAlbumData] = useState({});

  useEffect(() => {
    const getAlbumData = async () => {
      try {
        const res = await apiClient.get(`/album/get/${params.album}`);
        setAlbumData(res.data);
      } catch (e) {}
    };

    getAlbumData();
  }, [params.album]);

  return (
    <div className="mt-4 bg-gray-100 px-8">
      <h1 className="text-3xl">{albumData.title}</h1>
      {/* <AddressLink>{place.address}</AddressLink> */}
      {/* <PlaceGallery place={place} /> */}
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {albumData.description}
          </div>
          <div className="my-4">Genre: {albumData.genre}</div>
          Created by: You
          <br />
        </div>
        <div>{/* <BookingWidget place={place} /> */}</div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5"></div>
      </div>
    </div>
  );
};

export default page;
