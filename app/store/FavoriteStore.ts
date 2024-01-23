import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { FavoriteProduct } from "../types/ProductType"


type Favorite = {
    favoriteItems: FavoriteProduct[]
    addItemToFavorite: (id: number, title: string, brand: string, thumbnail: string) => void 
    removeItemFromFavorite: (id: number) => void
    showFavorite: boolean
    showFavoriteToggle: (status: boolean) => void
}

export const useFavoriteStore = create(persist<Favorite>((set) => ({
    favoriteItems: [],
    addItemToFavorite: (id: number, title: string, brand: string, thumbnail: string) => {
        set((state) => ({
            favoriteItems: [
                ...state.favoriteItems,
                {
                    id,
                    title,
                    brand,
                    thumbnail
                } as FavoriteProduct
            ]
        }))
    },
    removeItemFromFavorite: (id: number) => {
        set((state) => ({favoriteItems: state.favoriteItems.filter(item => item.id !== id)}))
    },
    showFavorite: false,
    showFavoriteToggle: (status: boolean) => {
        set(() => ({
            showFavorite: status
        }))
    }
}),
    {
        name: 'favorite',
        storage: createJSONStorage(() => localStorage)

    }
))