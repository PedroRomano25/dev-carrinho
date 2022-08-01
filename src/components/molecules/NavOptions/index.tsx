import { useRouter } from "next/router";
import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";

const NavOptions = componentFactory<INavOptionsProps>(
  "NavOptions",
  (props, ref) => {
  const {links} = props
  const router = useRouter();
  const { route , push} = router;

    return (
     <nav className={styles.navContainer} ref={ref}>
      <ul>
      {links.map((i,index) => (
        <li key={index}
         className={`${styles.options} ${route === i.path && styles.active}`}
         onClick={() => push(i.path)}>{i.label}</li>
      ))}        
      </ul>
     </nav>
    );
  }
);

export default NavOptions;
