import {create} from "zustand";
import {FighterRaw} from "@/types";

interface FightersStore {
  fighters: FighterRaw[];
  fetch: () => Promise<void>;
}

interface FightersGet {
  fighters: FighterRaw[];
}

const useFightersStore = create<FightersStore>()((set, get) => ({
  fighters: [],

  fetch: async () => {
    const response = await fetch('/api/fighters');

    const data = await response.json();
    const { fighters } = data

    console.log('f:', fighters);
    set({fighters})
  }
}));

export default useFightersStore;