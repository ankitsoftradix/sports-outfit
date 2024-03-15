import { create } from "zustand";

export const useColorStore = create((set) => ({
  colorPickerList: [
    { id: 1, name: "Shirt Color", color: "#fff" },
    { id: 2, name: "Tie Color", color: "#1434A4" },
    { id: 3, name: "Pallets Color", color: "#fff" },
  ],
  updateColor: (updatedId, updatedColor) =>
    set((state) => ({
      colorPickerList: state.colorPickerList.map((item) => {
        return item.id === updatedId ? { ...item, color: updatedColor } : item;
      }),
    })),
}));

export const useLogoStore = create((set) => ({
  logo: null,
  scale: 0.5,
  updateLogo: (imageFile) =>
    set(() => ({
      logo: imageFile ? URL.createObjectURL(imageFile) : null,
    })),
  updateScale: (scale) =>
    set(() => ({
      scale: scale,
    })),
}));
