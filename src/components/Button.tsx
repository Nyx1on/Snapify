import { CSSProperties } from "react";
import styles from "@/styles/button.module.scss";

type Props = {
  title?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
