"use client";
import React from "react";
import styles from "@/styles/form.module.scss";
import Button from "@/components/Button";

type Props = {};

const page = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <form action="" onSubmit={handleSubmit}>
          <h1 className={styles.formLabel}>Title</h1>
          <span className={styles.formSublabel}>
            Add a title for your gig, should be short and catchy
          </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="your title"
            className={styles.inputField}
          />
          <h1 className={styles.formLabel}>Description</h1>
          <span className={styles.formSublabel}>
            Add a description for your gig
          </span>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="your description"
            className={styles.inputField}
          />
          <h1 className={styles.formLabel}>Photos</h1>
          <span className={styles.formSublabel}>More photos = better</span>
          <input
            type="text"
            name="imagesUrl"
            id="imagesUrl"
            placeholder={`Upload Images by pasting the link eg "https://example.com"`}
            className={styles.inputField}
          />
          <button className={styles.inputPhoto}>+</button>
          <h1 className={styles.formLabel}>Service Type</h1>
          <span className={styles.formSublabel}>Add tags to your service</span>
          <input
            type="text"
            name="serviceType"
            id="serviceType"
            placeholder="sepcify type of service"
            className={styles.inputField}
          />
          <div>
            <Button
              title="Submit"
              onClick={() => {}}
              className="primary mt-2"
              style={{ color: "white", width: "100%" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
