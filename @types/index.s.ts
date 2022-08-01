declare global {
  interface ITransaction {
    id: number;
    machine: string;
    date: string;
    value: string;
    hour: string;
    qtdHour: number;
    earnings: number;
  }

  interface AuxProps {
    children: React.ReactNode;
  }

  interface IFreeShippingMensageProps extends React.ButtonHTMLAttributes<HTMLLabelElement> {
    children?: string;
    title?:string;
  }
  interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
    title?:string;
  }

  interface IDropDownProps {
    children?: React.ReactNode;
    isShow: boolean;
    onClose:() => void;
  }

  interface ICardCart {
    oldPrice: number | string;
    newPrice: number | string;
    image:string;
    title: string;
  }

  interface IApiData {
    items: IItemsApi[],
    value: number;
  }

  interface IItemsApi {
    price:number;
    imageUrl:string;
    sellingPrice:number;
    name:string;    
  }

  interface IPageHeaderProps {
    products:ICardCart[];
    total:number;
  }

  type IComponentProp<IProps, IRef> = (
    props: IProps,
    ref: React.ForwardedRef<IRef>
  ) => JSX.Element;

  type IComponent<IProps, IRef> = React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      React.PropsWithoutRef<IProps> & React.RefAttributes<IRef>
    >
  >;

  type IComponentFactory = <IProps, IRef = any>(
    componentName: string,
    component: IComponentProp<IProps, IRef>
  ) => IComponent<IProps, IRef>;
}

export {};
