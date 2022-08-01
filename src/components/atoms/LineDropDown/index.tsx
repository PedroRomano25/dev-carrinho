import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const LineDropDown = componentFactory("LineDropDown", (props, ref) => {

  return (
    <div
      ref={ref}
      className={styles.line}
    />
  );
});

export default LineDropDown;
