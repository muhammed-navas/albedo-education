import React, { useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";

export const UploadedImage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-12 h-12 cursor-pointer rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
        {/* Make the entire div clickable */}
        <label className="w-full h-full cursor-pointer flex items-center justify-center">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (<>
            <IoCameraOutline />
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
            </>
          )}
        </label>
      </div>
      <div className="text-gray-500 pb-4">
        <p className="text-xs text-center mt-2">Add your passport size photo</p>
        <p className="text-xs text-center text-gray-400">JPG, JPEG, PNG, up to 5MB (1080x1080 px)</p>
      </div>
    </div>
  );
};
