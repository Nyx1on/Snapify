"use client";
import React, { useState } from "react";
import styles from "@/styles/form.module.scss";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";
import { useUserContext } from "@/context/user-contex";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { AlbumData } from "@/app/constants/AlbumData";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { user, ready } = useUserContext();
  const [selectedPhotos, setSelectedPhotos] = useState<String[]>([]);
  const [albumData, setAlbumData] = useState<AlbumData>({
    title: "",
    description: "",
    genre: "",
    price: "",
    images: [],
    _id: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/album/create", {
        data: albumData,
      });
      router.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageUpload = async (e: any) => {
    e.preventDefault();
    const files = e.target.files;

    if (!files || files.length === 0) {
      return;
    }

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    try {
      const res = await apiClient.post("/images/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
      const uploadedImages = res.data;
      setAlbumData({
        ...albumData,
        images: [...albumData.images, ...uploadedImages],
      });
      const response = await axios.post("http://127.0.0.1:5000/image2prompt", {
        data: res.data, // Use params to send data in a GET request
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAlbumData({ ...albumData, [name]: value });
    console.log(albumData);
  };
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <form action="" onSubmit={handleSubmit}>
          <h1 className={styles.formLabel}>Title</h1>
          <span className={styles.formSublabel}>
            Add a title for your album, should be short and catchy
          </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="your title"
            className={styles.inputField}
            onChange={handleInputChange}
          />
          <h1 className={styles.formLabel}>Description</h1>
          <span className={styles.formSublabel}>
            Add a description for your album
          </span>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="your description"
            className={styles.inputField}
            onChange={handleInputChange}
          />
          <h1 className={styles.formLabel}>Photos</h1>
          <span className={styles.formSublabel}>More photos = better</span>
          <div className="flex">
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {albumData.images.length > 0 &&
                albumData.images.map((photo, index) => (
                  <div className="h-32 flex relative" key={index}>
                    <Image
                      src={`http://localhost:8000/uploads/${photo}`}
                      alt="image"
                      height={128}
                      width={128}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                ))}
              <label
                className={`${styles.inputPhoto} flex items-center justify-center cursor-pointer`}
              >
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
                +
              </label>
            </div>
          </div>
          <h1 className={styles.formLabel}>Genre</h1>
          <span className={styles.formSublabel}>Add tags to your Genre</span>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="sepcify type of genre"
            className={styles.inputField}
            onChange={handleInputChange}
          />
          {/* <h1 className={styles.formLabel}>Pricing</h1>
          <span className={styles.formSublabel}>
            Add details about your charging
          </span>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="sepcify type of charges"
            className={styles.inputField}
          /> */}
          <div>
            <input type="submit" className={styles.btn} />
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
