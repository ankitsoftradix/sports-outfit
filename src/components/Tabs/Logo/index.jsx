import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useLogoStore } from "../../../store";
import styles from "./Logo.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 8,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  margin: "10px",
  cursor: "grab",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const Logo = () => {
  const { logo, updateLogo, scale, updateScale, rotate, updateRotate } =
    useLogoStore();

  const onDropAccepted = (acceptedFiles) => {
    updateLogo(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ onDropAccepted, accept: { "image/*": [] }, multiple: false });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Add Logo</div>

      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <span>Drag & drop some files here, or click to select files</span>
      </div>

      {logo && (
        <div className={styles.imageWrap}>
          <img src={logo} alt="" className={styles.selectedImg} />
          <div className={styles.sliderWrap}>
            <span>Scale</span>
            <Slider
              min={0.3}
              max={1}
              step={0.01}
              value={scale}
              onChange={(e) => updateScale(e)}
            />
          </div>
          <div className={styles.sliderWrap}>
            <span>Rotate</span>
            <Slider
              min={0}
              max={360}
              step={1}
              value={rotate}
              onChange={(e) => updateRotate(e)}
            />
            <span>
              {rotate}
              <sup>°</sup>
            </span>
          </div>
          <button onClick={() => updateLogo(null)}>Remove logo</button>
        </div>
      )}
    </div>
  );
};

export default Logo;
