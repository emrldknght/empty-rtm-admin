import {create} from "zustand";
import {FighterRaw} from "@/types";

interface FightersStore {
  fighters: FighterRaw[];
  fetch: () => Promise<void>;
}

interface FightersGet {
  fighters: FighterRaw[];
  count: number;
  total: number;
}

const useFightersStore = create<FightersStore>()((set, _get) => ({
  fighters: [],

  fetch: async () => {
    const response = await fetch('/api/fighters');

    const data: FightersGet = await response.json();
    const { fighters } = data

    console.log('f:', fighters);
    set({fighters})
  }
}));

export default useFightersStore;