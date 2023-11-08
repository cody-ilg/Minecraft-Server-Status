
import { useState,useEffect } from "react"
import { getDisney } from "../apiClient.tsx"
// import type {Disney} from '../../models/welcome.ts'
function Disney() {
   const [disneyInfo,setDisneyInfo] = useState()

   useEffect(()=>{
    async function fetchDisney(){
      const result = await getDisney()
      setDisneyInfo(result.data)
      
    }
    fetchDisney()
    
   },[])
   const newArr = disneyInfo?.map(data=>(<li>{data.films}</li>))
   console.log("adsf",newArr)
  return (<> <li>{newArr}</li></> )
    
   
    
  

}

export default Disney