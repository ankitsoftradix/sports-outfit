import { create } from "zustand";

export const useBearStore = create((set) => ({
  colorPickerList: [
    { id: 1, name: "Tie Color", color: "#228b22" },
    { id: 2, name: "Shirt Color", color: "#fff" },
    { id: 3, name: "Pallets Color", color: "#fff" },
  ],
  updateColor: (updatedId, updatedColor) =>
    set((state) => ({
      colorPickerList: state.colorPickerList.map((item) => {
        return item.id === updatedId ? { ...item, color: updatedColor } : item;
      }),
    })),
}));
