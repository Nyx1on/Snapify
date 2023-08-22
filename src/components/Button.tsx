import { CSSProperties } from "react";
import styles from "@/styles/button.module.scss";

type Props = {
  title: string;
  onClick?: () => void;
  style?: CSSProperties;
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <button type="button" className={styles.button} style={props.style}>
      {props.title}
    </button>
  );
};

export default Button;
