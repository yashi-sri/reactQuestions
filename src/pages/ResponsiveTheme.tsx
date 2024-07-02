// responsive navabar 

import React ,{useState} from "react"
import { MdDarkMode } from "react-icons/md";

const ResponsiveTheme =()=>{
	const[menuShow,setMenuShow] =useState(false)
 const[isDark,setIsDark] = useState(false) 
	return (
<>
<div className=" h-screen w-screen"> 
<nav className=" flex justify-between p-5 w-screen  gap-2 border relative" >
<div className="flex" > 
{/*left-menu*/}
icon

<MdDarkMode />
</div>

<div> <button onClick={()=>setIsDark(!isDark)} className={isDark? "text-white":"text-black"}  > {isDark? " Dark":"light" } </button> </div>
<ul  className="flex justify-end gap-5 item-center  border  border-red-500  responsive ">
 <li className="border p-2"> home</li> 
 <li className="border p-2"> about </li> 
 <li className="border p-2"> contact </li> 
</ul>

 <div className="menuIcon"> <button className="menuIcon" onClick={()=>setMenuShow(!menuShow) }> {!menuShow? "menu":"close"} </button> </div>

{menuShow&&(

<ul  className="flex flex-col justify-end gap-5 item-center border border-red-500 absolute right-0 top-16 delay-500 mobMenu ">
 <li className="border p-2"> home</li> 
 <li className="border p-2"> about </li> 
 <li className="border p-2"> contact </li> 
</ul>
)
}
 </nav>


</div>
</>
	)
}



export default ResponsiveTheme;