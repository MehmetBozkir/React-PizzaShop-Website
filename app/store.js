"use client";
import create from "zustand";
import axios from "axios";

const URL = "https://65ea500ac9bf92ae3d3b5e78.mockapi.io/pizza/shop/test";

const useStore = create((set, get) => ({
  count: 0,
  fishies: [],
  loading: false,
  fetch: async () => {
    try {
      const response = await axios(URL);
      console.log("response", response);
      set({ loading: false, fishies: response.data });
    } catch (error) {
      console.error("error", error);
    }
  },
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
