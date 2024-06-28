

import React ,{useState} from "react"

const SelectColor =()=>{
	const [selected,setSelected] =useState("#000fff")
	const handleChangeColor=(e)=>{
     setSelected(e.target.value)
	}
return(
<>
<div className="flex  gap-2 border h-screen w-screen justify-center items-center" style={{backgroundColor:`${selected}`}}> 
<input type="color" value={selected} onChange={handleChangeColor} />

</div>
</>
)
		

}
export default SelectColor