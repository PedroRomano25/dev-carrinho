import type { NextPage } from 'next'
import PageHeader from '../../components/organisms/PageHeader'
import * as React from "react";
import { useGetData } from '../../service/getData';

const MaioresPrecos: NextPage = () => {
  const [data,setData] = React.useState<ICardCart[]>([])
  const [total,setTotal] = React.useState<number>(0)
  const dados = useGetData()
  
  React.useEffect( () => {    
    dados.Menores().then((i:IApiData) => {  
      setTotal(i.value)
      const newData = i.items.map((i:IItemsApi) => ({
        oldPrice: i.price,
        newPrice: i.sellingPrice,
        image:i.imageUrl,
        title: i.name,
      }
      ))    
      setData(newData as any)
      })      
  },[])
  
  return (
    <div >     
      <PageHeader products={data} total={total}/>  
    </div>
  )
}

export default MaioresPrecos
