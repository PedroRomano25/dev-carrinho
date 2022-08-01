import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const Button = componentFactory<IButtonProps>("Button", (props, ref) => {
  const { children, title,className, ...rest } = props;
  return (
    <button ref={ref} className={`${styles.button} ${className}`} {...rest}>
      <span>{children || title}</span>
    </button>
  );
});

export default Button;
