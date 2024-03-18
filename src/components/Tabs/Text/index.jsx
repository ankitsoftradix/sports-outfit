import styles from "./Text.module.scss";

const Text = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Add Text</div>
      <div className={styles.mainWrap}>
        <input type="text" className={styles.inputField} />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Text;
