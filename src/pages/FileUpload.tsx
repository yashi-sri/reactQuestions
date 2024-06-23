import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();

  const handleFile = (e) => {
    let ImageURL = e.target.files[0];
    console.log(e.target.files);

    setFile(ImageURL);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="loaded"
          className="h-8  w-6 border "
        />
      )}
    </div>
  );
};

export default FileUpload;
