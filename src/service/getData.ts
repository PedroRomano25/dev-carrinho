import axios from "axios";
import { useMemo } from "react";
import { abaixoDe10 } from "../Json/abaixoDe10";
import { acimaDe10 } from "../Json/acimaDe10";

class getData {       
    async Menores( ) {      
        const url = 'https://s3.us-west-2.amazonaws.com/sasdasdecure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220801T023324Z&X-Amz-Expires=86400&X-Amz-Signature=7bb436d0f5386ad3cc9c12718797778f8f4d3339ec6da6f8daf58154db74a765&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22&x-id=GetObject'
        const result = await axios
          .get(url)
          .then((i) => {
              return i.data
            })
          .catch((i) => {
            return abaixoDe10
        });
        return result 
      }
    async Maiores( ) {      
        const url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220803T032951Z&X-Amz-Expires=86400&X-Amz-Signature=5f0191e15fe37d7d60d01d7e3806e497e67a40e33a1667d2215e56eb2b54fb47&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22&x-id=GetObject";
        const result = await axios
          .get(url)
          .then((i) => {            
              return i.data
            })
          .catch((i) => {
            return acimaDe10
        });
        return result 
      }
}
export default getData;

export const useGetData = () => {    
    return useMemo(() => new getData(), []);
}

