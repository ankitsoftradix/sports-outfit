import { useTextStore } from "../../../store";
import styles from "./Text.module.scss";

const Text = () => {
  const { text, updateText } = useTextStore();
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Add Text</div>
      <div className={styles.mainWrap}>
        <input
          value={text}
          type="text"
          className={styles.inputField}
          placeholder="Enter text here..."
          onChange={(e) => updateText(e.target.value)}
          maxLength={20}
        />
        {/* <button>Add text</button> */}
      </div>
    </div>
  );
};

export default Text;
