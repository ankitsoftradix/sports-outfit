import ShirtCanvas from "../../ShirtCanvas";
import styles from "./Text.module.scss";

const Text = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Add Text</div>
      <ShirtCanvas />
    </div>
  );
};

export default Text;
