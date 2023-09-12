"use client";
import { useUserContext } from "@/context/user-contex";
import apiClient from "@/helpers/apiClient";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const { user, setUser } = useUserContext();
  const [albums, setAlbums] = useState([]);
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
      <div>Hello {user?.name}</div>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[48px]">Community</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated using the API of OpenAI.
        </p>
      </div>
      <div>
        {albums.length > 0 ? (
          <div>
            {albums.map((index, albums) => (
              <div key={albums._id}></div>
            ))}
          </div>
        ) : (
          <div>No Posts Yet</div>
        )}
      </div>
    </>
  );
};

export default page;
