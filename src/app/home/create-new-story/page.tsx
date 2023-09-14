"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/form.module.scss";
import Button from "@/components/Button";
import apiClient from "@/helpers/apiClient";
import { useUserContext } from "@/context/user-contex";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { AlbumData } from "@/app/constants/AlbumData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const { user, ready } = useUserContext();
  const [selectedPhotos, setSelectedPhotos] = useState<String[]>([]);
  const [createAlbumData, setCreateAlbumData] = useState({
    title: "",
    story: "",
    prompt: "",
  });

  const [captions, SetCaptions] = useState<String[]>([]);
  const [story, SetStory] = useState<String>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/album/create", {
        data: createAlbumData,
        images: selectedPhotos,
      });
      router.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageUpload = async (e: any) => {
    e.preventDefault();
    setLoader(true);
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
      setSelectedPhotos((prevSelectedPhotos) => [
        ...prevSelectedPhotos,
        ...uploadedImages,
      ]);
      const response = await axios.post("http://127.0.0.1:5000/captions/get", {
        data: res.data, // Use params to send data in a GET request
      });
      SetCaptions(response.data);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const generateStory = async () => {
    setLoader(true);
    if (captions.length > 0) {
      try {
        const response = await axios.post("http://127.0.0.1:5000/story/get", {
          captions: captions,
        });
        console.log(response.data);
        SetStory(response.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Cannot generate story with no images");
    }
    setLoader(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateAlbumData({ ...createAlbumData, [name]: value });
    console.log(createAlbumData);
  };
  return (
    <>
      <div className="flex">
        <div className="md:w-1/2 p-6">
          <form action="" onSubmit={handleSubmit}>
            <h1 className={styles.formLabel}>Title</h1>
            <span className={styles.formSublabel}>
              Add a title for your album, should be short and catchy
            </span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Your title"
              className={styles.inputField}
              onChange={handleInputChange}
            />
            {/* <h1 className={styles.formLabel}>Description</h1>
          <span className={styles.formSublabel}>
            Add a description for your album
          </span>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Your description"
            className={styles.inputField}
            onChange={handleInputChange}
          /> */}
            <h1 className={styles.formLabel}>Photos</h1>
            <span className={styles.formSublabel}>More photos = better</span>
            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {selectedPhotos.length > 0 &&
                selectedPhotos.map((photo, index) => (
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
            <h1 className={styles.formLabel}>Prompts</h1>
            <span className={styles.formSublabel}>
              Add prompts to include in story
            </span>
            <input
              type="text"
              name="prompt"
              id="prompt"
              placeholder="This field is optional"
              className={styles.inputField}
              onChange={handleInputChange}
            />
            <div>
              {loader ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px 0",
                  }}
                >
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                <Button
                  title="Generate a Story"
                  className={styles.btn}
                  onClick={generateStory}
                />
              )}
              <input
                type="submit"
                value="Share with community"
                style={{ backgroundColor: "#000" }}
                className={styles.btn}
              />
            </div>
          </form>
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className={styles.formLabel}>Story</h1>
          <span className={styles.formSublabel}>
            Generate a story using the photos and title
          </span>
          <textarea
            name="story"
            id="story"
            placeholder="Your generated story goes here..."
            className={`${styles.inputField} h-96`} // Adjust the height as needed
            readOnly
            value={story}
            onChange={() => {}} // Call a function to generate the story
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default page;
