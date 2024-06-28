

import React ,{useState} from "react"

const PAGE= 1;
const LIMIT= 2;

const Pagination =()=>{
	const [list] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      price: 29.99,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 49.99,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 69.99,
      category: "Footwear",
    },
    {
      id: 4,
      name: "Water Bottle",
      price: 9.99,
      category: "Fitness",
    },
    {
      id: 5,
      name: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 39.99,
      category: "Office Supplies",
    },
    {
      id: 7,
      name: "Desk Lamp",
      price: 24.99,
      category: "Office Supplies",
    },
    {
      id: 8,
      name: "Backpack",
      price: 59.99,
      category: "Accessories",
    },
    {
      id: 9,
      name: "Sunglasses",
      price: 15.99,
      category: "Accessories",
    }
  ]);
	const [page,setPage] =useState(PAGE);
	const [pageLength,setPagelength]= useState(Array.from({length:Math.ceil(list.length/LIMIT)}))
	const [updatedList,setUpdateList] =useState([])

const changePage =(val)=>{
  setPage(val+1)
  let temp =list;
temp=temp.slice(val*LIMIT,(val*LIMIT)+LIMIT )
setUpdateList(temp)
  
console.log()

}


	return(
<>
<div> 
 <ol>
 {updatedList.map((item)=>(<li key={item?.id}>{item?.name} </li>))}
 </ol>


<div className="mt-3" >
 {pageLength.map((item,index)=>(
<button key={index} className="border p-2" onClick={()=>{changePage(index)}} >{index+1} </button>
 	))}
</div>
</div>
 </>
		)
}

export default Pagination