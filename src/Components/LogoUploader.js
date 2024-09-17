import React, { useState } from 'react';
import { ReactComponent as UploadIcon } from '../Images/upload_icon.svg';
import '../Style/LogoUploader.css';

const LogoUploader = ({ onLogoUpload, buttonColor }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Update file name state
      onLogoUpload(file); // Pass file to parent component
    }
  };

  return (
    <div className="logo-uploader">
      <h2>Upload a logo for an instant preview.</h2>
      <h5 style={{fontWeight: 'normal', marginBottom: '35px', marginTop: '10px' }}>
        .png and .jpg file only. Max file size is 5MB
      </h5>
      <label
        htmlFor="logoInput"
        className="upload-button"
        style={{ backgroundColor: buttonColor }} // Apply dynamic button color
      >
        <UploadIcon className="upload-logo-icon" />
        {fileName || 'Upload Logo'} {/* Display file name or default text */}
      </label>
      <input
        type="file"
        id="logoInput"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />
    </div>
  );
};

export default LogoUploader;
