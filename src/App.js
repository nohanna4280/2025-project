import React, { useRef, useState } from "react";
import "./App.css";

export default function App() {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const pickImage = () => fileRef.current?.click();
  const onChangeFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFileName(f.name);
  };
  const goList = () => {};

  return (
    <div className="wrap">
      <div className="phone">
        <div className="main">
          <div className="cameraicon">
            <svg viewBox="0 0 24 24" className="camera">
              <path d="M9.5 6h5l1 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3l1-2zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
            </svg>
          </div>

          <button className="btn btnPrimary" onClick={pickImage}>사진 가져오기</button>
          <div className="dots">•••</div>
          <button className="btn btnSecondary" onClick={goList}>목록</button>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onChangeFile}
            hidden
          />

          {fileName && <div className="fileHint">{fileName}</div>}

        </div>
      </div>
    </div>
  );
}
