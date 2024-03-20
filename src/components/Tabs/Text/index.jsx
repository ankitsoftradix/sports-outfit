import { useEffect } from "react";
import { useTextStore } from "../../../store";
import styles from "./Text.module.scss";
import Slider from "rc-slider";

const Text = () => {
  const {
    text,
    updateText,
    textScale,
    updateTextScale,
    textViewScale,
    updateTextViewScale,
    textAspect,
    updateTextAspect,
    updateFontSize,
  } = useTextStore();

  const updateProperties = (scale, aspect) => {
    updateTextScale(scale);
    updateTextAspect(aspect);
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Add Text</div>
      <div className={styles.mainWrap}>
        <input
          value={text}
          type="text"
          className={styles.inputField}
          placeholder="Enter text here..."
          onChange={(e) => {
            console.log("textScale[0] ==> ", textScale[0]);
            updateText(e.target.value);
            if (e.target.value.length === 0) {
              updateProperties([0.6, 0.6 / 1.5, 1.4], 1);
            } else if (e.target.value.length < text.length) {
              updateProperties(
                [textScale[0] - 0.1, 0.6 / 1.5, 1.4],
                textAspect - 0.5
              );
            } else if (!(textScale[0] >= 1.4)) {
              updateProperties(
                [textScale[0] + 0.1, 0.6 / 1.5, 1.4],
                textAspect + 0.5
              );
            }
          }}
          // maxLength={20}
        />
        {/* <button>Add text</button> */}

        <div className={styles.sliderWrap}>
          <span>Scale</span>
          <Slider
            min={0.3}
            max={1}
            step={0.01}
            value={textViewScale}
            onChange={(e) => updateTextViewScale(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
