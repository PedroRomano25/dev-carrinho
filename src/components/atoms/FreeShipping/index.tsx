import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const FreeShippingMensager = componentFactory<IFreeShippingMensageProps>("Button", (props, ref) => {
  const { children, title } = props;
  return (
    <label ref={ref} className={styles.containerFreeShipping}>{children || title}</label>
  );
});

export default FreeShippingMensager;
