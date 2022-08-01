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
import i18n from "../../../i18n";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { useTranslation } from "react-i18next";
import flagBrazil from '../../../../public/Brazilian_Flag.svg'
import flagUSA from '../../../../public/usa_round.svg'

const PageHeader = componentFactory<IPageHeaderProps>(
  "PageHeader",
  (props, ref) => {
    const [showMenu, toggleMenu] = React.useState<boolean>(false);
    const [language,setLanguage] = useLocalStorage('language','pt')
    const { products, total } = props;   
    const {t} = useTranslation()

    const changeLanguage = () => {
      if (language === 'pt'){
        i18n.changeLanguage('en')
        setLanguage('en')
      } else if (language === 'en'){
        i18n.changeLanguage('pt')
        setLanguage('pt')
      }
    }

    const links = [
      {          
          label: t('Acima de R$ 10,00'),
          path: '/AcimaDe10',
      },
      {        
          label: t('Abaixo de R$ 10,00'),
          path: '/AbaixoDe10',
      },
  ];

    return (
      <>
        <Header ref={ref}>
          <NavOptions links={links} />
          <section className={styles.menu}>
            {localStorage.getItem("language") === '"en"' && (
              <span className={styles.cart} onClick={() => changeLanguage()}>
                <Image src={flagBrazil} alt="CartShop" width={72} height={32} />
              </span>
            )}
            {localStorage.getItem("language") === '"pt"' && (
              <span className={styles.cart} onClick={() => changeLanguage()}>
                <Image src={flagUSA} alt="CartShop" width={72} height={32} />
              </span>
            )}
            <span
              className={styles.cart}
              onClick={() => toggleMenu((oldState) => !oldState)}
            >
              <Image src={cartShop} alt="CartShop" width={72} height={32} />
            </span>
            <DropDown
              isShow={showMenu}
              onClose={() => toggleMenu(false)}
              title={t("Meu Carrinho")}
            >
              {products.map((i, index) => (
                <CardCart
                  key={index}
                  oldPrice={formatterBRL.format(Number(i.oldPrice) / 100)}
                  newPrice={formatterBRL.format(Number(i.newPrice) / 100)}
                  image={i.image}
                  title={i.title}
                />
              ))}
              <LineDropDown />
              <div className={styles.total}>
                <span>Total:</span>
                <span>{formatterBRL.format(Number(total) / 100)}</span>
              </div>
              {total >= 1000 && (
                <FreeShippingMensager
                  title={t("Parabéns, sua compra tem frete grátis !")}
                />
              )}
              <LineDropDown />
              <Button>{t("Finalizar")}</Button>
            </DropDown>
          </section>
        </Header>
      </>
    );
  }
);

export default PageHeader;
