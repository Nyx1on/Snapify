import React from "react";
import styles from "@/styles/footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={`${styles.footer} bg-secondary text-white py-8`}>
      <div className="container mx-auto text-center">
        {/* Footer content */}
        &copy; {new Date().getFullYear()} Snapify | {" "}
        <a
          href="https://github.com/Nyx1on/Snapify"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          GitHub link
        </a>{" "}
        |{" "}
        <a
          href="https://iamnyx1on.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          My Portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
