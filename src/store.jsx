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
  rotate: 0,
  updateLogo: (imageFile) =>
    set(() => ({
      logo: imageFile ? URL.createObjectURL(imageFile) : null,
    })),
  updateScale: (scale) =>
    set(() => ({
      scale,
    })),
  updateRotate: (rotate) =>
    set(() => ({
      rotate,
    })),
}));

export const useTextStore = create((set) => ({
  text: "",
  textViewScale: 0.6,
  textScale: [0.6, 0.6 / 1.5, 1.4],
  textAspect: 1,
  textPosition: [0, 0, 2],
  fontSize: 2,
  updateText: (text) =>
    set(() => ({
      text,
    })),
  updateTextViewScale: (scale) =>
    set(() => ({
      textViewScale: scale,
    })),
  updateTextScale: (scale) =>
    set(() => ({
      textScale: scale,
    })),
  updateTextAspect: (aspect) =>
    set(() => ({
      textAspect: aspect,
    })),
  updateTextPosition: (position) =>
    set(() => ({
      textAspect: position,
    })),
  updateFontSize: (fontSize) =>
    set(() => ({
      fontSize,
    })),
}));
