import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import ClickAwayListener from "../../ClickAwayListener";
import styles from "./Color.module.scss";
import { useColorStore } from "../../../store";

const Picker = (props) => {
  const { id, name, color } = props;
  const [localColor, setLocalColor] = useState("");

  const [showPicker, setShowPicker] = useState(false);
  const togglePicker = () => setShowPicker(!showPicker);

  const updateColor = useColorStore((state) => state.updateColor);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localColor) {
        updateColor(id, localColor);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [id, localColor, updateColor]);

  return (
    <div className={styles.itemWrap}>
      <div className={styles.title}>{name}</div>
      <ClickAwayListener onClickAway={() => setShowPicker(false)}>
        <div
          className={styles.colorViewer}
          style={{ backgroundColor: color }}
          onClick={togglePicker}
        />
        {showPicker && (
          <div className={styles.colorPicker}>
            <HexColorPicker color={color} onChange={setLocalColor} />
          </div>
        )}
      </ClickAwayListener>
    </div>
  );
};

export default Picker;
