"use client";
import create from "zustand";
import axios from "axios";

const URL = "https://dummyjson.com/products";

const useStore = create((set, get) => ({
  count: "",
  fishies: [],
  signfishies: {},
  loading: false,
  test: "",
  fetch: async () => {
    try {
      const response = await axios(URL);
      console.log("response", response);
      set({ loading: false, fishies: response.data.products });
    } catch (error) {
      console.error("error", error);
    }
  },
  signfetch: async ({ count }) => {
    try {
      const singleData = await axios(`https://dummyjson.com/products/${count}`);
      set({ signfishies: singleData.data });
      console.log("singleData", singleData);
    } catch (error) {
      console.error("error", error);
    }
  },
  inc: () => set((state) => ({ productId: state.productId + 0 })),
  dec: (count) => set(() => ({ count: count + 2 })),
}));

export default useStore;
