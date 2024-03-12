import { useColorStore } from "../../../store";
import styles from "./Color.module.scss";
import Picker from "./Picker";

const Color = () => {
  const colorPickerList = useColorStore((state) => state.colorPickerList);

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
    </div>
  );
};

export default Color;
