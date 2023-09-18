import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center font-bold">About Snapify</h1>
      <div className="max-w-3xl mx-auto mt-8 px-4 font-semibold">
        <p className="text-lg text-gray-700 leading-7">
          Welcome to Snapify, a web application designed with photographers in
          mind. Snapify is the brainchild of a passionate photographer and
          technology enthusiast who saw a need for a platform that not only
          helps photographers tell compelling stories through their images but
          also fosters a thriving community of creative individuals.
        </p>
        <p className="text-lg text-gray-700 leading-7 mt-4">
          With Snapify, you can effortlessly transform your photos into
          immersive stories. Whether you're documenting a travel adventure,
          capturing a special moment, or simply sharing your artistic vision,
          Captivate helps you craft stories that resonate.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
