import { create } from 'zustand';
import { Brand } from './types';
import { MOCK_BRANDS } from '@/data/mock-data';

interface AppState {
  selectedBrand: Brand;
  setSelectedBrand: (brand: Brand) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Default to the first mock brand
  selectedBrand: MOCK_BRANDS[0],
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
}));