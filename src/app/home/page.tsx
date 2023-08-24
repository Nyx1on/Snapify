"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const getMusic = async () => {
      const response = await fetch("http://localhost:8080/");
      const res = await response.json();
      console.log(res);
      setData(res);
    };

    getMusic();
  }, []);

  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default page;
