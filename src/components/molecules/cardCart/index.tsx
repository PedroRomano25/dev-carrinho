import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import styles from "./index.module.scss";
import Image from 'next/image'

const CardCart = componentFactory<ICardCart>(
  "CardCart",
  (props, ref) => {

    const {image,newPrice,oldPrice,title} = props

    return (
      <div ref={ref} className={styles.containerCardCart }>    
       <span className={styles.imageCart} >
      <Image src={image} alt={title} layout='responsive' objectFit="cover" width={50} height={50}/>
        </span>
        <div className={styles.containerText}>
          <h3>{title}</h3>
          <del><span>{oldPrice}</span></del>
          <span>{newPrice}</span>
        </div>
     </div>
    );
  }
);

export default CardCart;
