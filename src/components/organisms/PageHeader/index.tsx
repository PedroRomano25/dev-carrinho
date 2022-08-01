import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import Header from "../../atoms/Header";
import styles from "./index.module.scss";
import DropDown from "../../atoms/DropDown";
import Image from "next/image";
import cartShop from "../../../../public/shopping-cart.svg";
import CardCart from "../../molecules/cardCart";
import Button from "../../atoms/Button";
import NavOptions from "../../molecules/NavOptions";
import LineDropDown from "../../atoms/LineDropDown";
import FreeShippingMensager from "../../atoms/FreeShipping";
import { formatterBRL } from "../../../utils/formatRealBRL";

const PageHeader = componentFactory<IPageHeaderProps>(
  "PageHeader",
  (props, ref) => {
    const [showMenu, toggleMenu] = React.useState<boolean>(false);
    const { products, total } = props;

    return (
      <>
        <Header ref={ref}>
          <NavOptions />
          <section className={styles.menu}>
            <span
              className={styles.cart}
              onClick={() => toggleMenu((oldState) => !oldState)}
            >
              <Image src={cartShop} alt="CartShop" width={72} height={32} />
            </span>
            <DropDown isShow={showMenu} onClose={() => toggleMenu(false)}>
              {products.map((i, index) => (
                <CardCart
                  key={index}
                  oldPrice={formatterBRL.format(Number(i.oldPrice)/100)}
                  newPrice={formatterBRL.format(Number(i.newPrice)/100)}
                  image={i.image}
                  title={i.title}
                />
              ))}
              <LineDropDown />
              <div className={styles.total}>
                <span>Total:</span>
                <span>{formatterBRL.format(Number(total)/100)}</span>
              </div>
              {total >= 1000 && (
                <FreeShippingMensager title="Parabéns, sua compra tem frete grátis !" />
              )}
              <LineDropDown />
              <Button>Finalizar</Button>
            </DropDown>
          </section>
        </Header>
      </>
    );
  }
);

export default PageHeader;
