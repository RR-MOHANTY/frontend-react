import React, { useEffect, useState } from 'react'
let url='https://api.npoint.io/4459a9a10e43812e1152';
 const useFetch = (url) => {
    const[data,setData]=useState();
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return [data]
}

export default useFetch