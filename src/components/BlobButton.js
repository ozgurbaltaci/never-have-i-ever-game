import React from "react";
import "./BlobButton.css";

const BlobButton = ({ buttonText, onClick, disabled = false }) => {
  return (
    <div className="buttons">
      <button className="blob-btn" onClick={onClick} disabled={disabled}>
        {buttonText || "Click Here"}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default BlobButton;
