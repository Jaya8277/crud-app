import React, { useEffect, useState } from 'react'
import axios from 'axios'
const User = () => {
    const [data,setData] = useState([]);
    const [name,setName]= useState("");
    const [age,setAge]= useState("");
    const [city,setCity]= useState("");
    const [email,setEmail]= useState("");

    useEffect(()=> {
        getData();
    },[])
    const getData=()=> {
        axios.get("http://localhost:8080/view").then((res)=> {
            setData(res.data);
            console.log(res.data);
        }).catch((err)=> {
            console.log(err)
        })
    }

  return (
    <div>
        <input type="text" onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name'/>
        <input type="number" onChange={(e)=> setAge(e.target.value)} placeholder='Enter Your age'/>
        <input type="text" onChange={(e)=> setCity(e.target.value)} placeholder='Enter Your city'/>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your email'/>
        {/* <button onClick={postData}>Add</button> */}

    </div>
  )
}

export default User