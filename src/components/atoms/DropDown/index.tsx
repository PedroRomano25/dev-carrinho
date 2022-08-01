import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";
import Image from "next/image";
import cross from "../../../../public/cross-15.svg";
import LineDropDown from "../LineDropDown";

const DropDown = componentFactory<IDropDownProps>("DropDown", (props, ref) => {
  const { children, isShow = false, onClose, title } = props;
  return (
    <div
      ref={ref}
      className={`${styles.dropDown} ${isShow ? "" : styles.disabled}`}
    >
      <div className={styles.content}>
        <div className={styles.exit}>
          <h3>{title}</h3>
          <span className={styles.image}>
            <Image
              src={cross}
              alt="Exit"
              width={30}
              height={16}
              onClick={onClose}
            />
          </span>
        </div>
        <LineDropDown/>
        {children}
      </div>
    </div>
  );
});

export default DropDown;
