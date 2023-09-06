import { CSSProperties, ReactNode } from "react";
import styles from "@/styles/button.module.scss";

type Props = {
  title?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children?: ReactNode;
};

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {props.children}
        {props.title}
      </div>
    </button>
  );
};

export default Button;
