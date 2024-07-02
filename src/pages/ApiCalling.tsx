
import React,{useEffect ,useState} from "react"

const ApiCalling =()=>{
	const [data,setData]= useState([]);
	
	const handleData = async ()=>{
		try{
			let res = await fetch(`https://jsonplaceholder.typicode.com/users `)
           res = await res.json()
           setData(res)
           }catch(err){
	         console.log("err")
           }
	}
	useEffect(()=>{handleData()},[])

return(<><div>
  <h1 style={{borderBottom:"1px solid white"}} > UserData</h1>

 {data?.map((item)=>(<p key={item?.id}>{item?.id +" ."}	 {item?.name}</p>  ))} </div></>
 )
}
export default ApiCalling