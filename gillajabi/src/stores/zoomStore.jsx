import { create } from 'zustand';

export const useZoomStore = create((set, get) => ({
  toggleZoom: false,
  zoomLevel: 100,

  setToggleZoom: (value) => set({ toggleZoom: value }),

  handleZoom: () => {
    const currentZoom = get().toggleZoom;
    set({ toggleZoom: !currentZoom });
  },

  zoomIn: () => {
    const currentZoom = get().zoomLevel;
    if (currentZoom < 120) {
      set({ zoomLevel: currentZoom + 4 });
    }
  },

  zoomOut: () => {
    const currentZoom = get().zoomLevel;
    if (currentZoom > 100) {
      set({ zoomLevel: currentZoom - 4 });
    }
  },

  resetZoom: () => {
    set({ zoomLevel: 100 });
  },
}));
