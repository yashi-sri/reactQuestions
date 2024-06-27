
// const Searchbar = () => {
//   const [list, setList] = useState([
//     {
//       id: 1,
//       name: "Wireless Mouse",
//       price: 29.99,
//       category: "Electronics",
//     },
//     {
//       id: 2,
//       name: "Bluetooth Speaker",
//       price: 49.99,
//       category: "Electronics",
//     },
//     {
//       id: 3,
//       name: "Running Shoes",
//       price: 69.99,
//       category: "Footwear",
//     },
//     {
//       id: 4,
//       name: "Water Bottle",
//       price: 9.99,
//       category: "Fitness",
//     },
//     {
//       id: 5,
//       name: "Yoga Mat",
//       price: 19.99,
//       category: "Fitness",
//     },
//     {
//       id: 6,
//       name: "Laptop Stand",
//       price: 39.99,
//       category: "Office Supplies",
//     },
//     {
//       id: 7,
//       name: "Desk Lamp",
//       price: 24.99,
//       category: "Office Supplies",
//     },
//     {
//       id: 8,
//       name: "Backpack",
//       price: 59.99,
//       category: "Accessories",
//     },
//     {
//       id: 9,
//       name: "Sunglasses",
//       price: 15.99,
//       category: "Accessories",
//     },
//     {
//       id: 10,
//       name: "Portable Charger",
//       price: 29.99,
//       category: "Electronics",
//     },
//   ]);
//   const [updateArr,setUpdateArr]=useState(list) 
//   const [searchValue,setSearchValue] =useState("");
//   const handleSearch = (e) => {
//     let timer =setTimeout(()=>{console.log("function after 1 sec")
//       setSearchValue( (time)=> e.target.value)
//      },1000)
//     return ()=> clearTimeout(timer)

//     // setSearchValue(e.target.value)
//   };

//   useEffect(()=>{
//     if(!searchValue){
//       setUpdateArr(list)
//     }else{ 
//      const newArr = [];
//      list.map((item)=> { if (item?.name.toLowerCase().includes(searchValue.toLowerCase()))  newArr.push(item)} ) 
//     setUpdateArr(newArr)
//     }
//   },[searchValue])
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search."
//         className="rounded-md pl-5 text-black "
//         value={searchValue}
//         onChange={handleSearch}
//       />

//       <div>
//         <ol>
//           {updateArr?.map((item) => (
//             <li key={item.id}>{item?.name} </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect, useCallback } from 'react';

const Searchbar = () => {
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
    },
    {
      id: 10,
      name: "Portable Charger",
      price: 29.99,
      category: "Electronics",
    },
  ]);
  const [updateArr, setUpdateArr] = useState(list);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(searchValue);

  const debounce = useCallback((value, delay) => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    debounce(value, 1000);
  };

  useEffect(() => {
    if (!debouncedValue) {
      setUpdateArr(list);
    } else {
      const newArr = list.filter((item) =>
        item.name.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setUpdateArr(newArr);
    }
  }, [debouncedValue, list]);

  return (
    <div>
      <input
        type="text"
        placeholder="search."
        className="rounded-md pl-5 text-black"
        value={searchValue}
        onChange={handleSearch}
      />

      <div>
        <ol>
          {updateArr.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// export default Searchbar;


export default Searchbar;
