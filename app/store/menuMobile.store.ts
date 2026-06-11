import { create } from "zustand"

export interface BtnMenuMobile{
      isOpen: boolean,
      toggleMenu: () => void
}

export const useBtnMenuMobile = create<BtnMenuMobile>(
      (set) => ({
            isOpen: false,
            toggleMenu: () => set((state) => ({ isOpen: !state.isOpen }))
      })
)