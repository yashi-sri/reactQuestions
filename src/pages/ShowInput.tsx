import React, { useState } from "react";

const ShowInput = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex  flex-col gap-10 border py-24 px-10 rounded-md  ">
          <div className="flex flex-col gap-1">
            <label> First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData?.firstName}
              placeholder="first Name "
              onChange={handleOnChange}
              className="border pl-3 rounded-md text-black  outline-none h-8"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Last Name </label>
            <input
              type="text"
              name="lastName"
              value={formData?.lastName}
              placeholder="Last Name "
              onChange={handleOnChange}
              className="border pl-3 rounded-md text-black outline-none h-8"
            />
          </div>
        </div>
        <div className="mt-5">
          <p> Show Input = {`${formData?.firstName}  ${formData?.lastName}`}</p>
        </div>
      </div>
    </>
  );
};

export default ShowInput;
