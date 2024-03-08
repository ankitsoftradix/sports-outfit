import { useBearStore } from "../../../store";
import ShirtCanvas from "../../ShirtCanvas";
import styles from "./Color.module.scss";
import Picker from "./Picker";

const Color = () => {
  const colorPickerList = useBearStore((state) => state.colorPickerList);

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Choose colors</div>
      {colorPickerList.map((item) => (
        <Picker
          key={item.id}
          id={item.id}
          name={item.name}
          color={item.color}
        />
      ))}
      <div className={styles.canvasDiv}>
        <ShirtCanvas />
      </div>
    </div>
  );
};

export default Color;
