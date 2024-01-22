import { create } from "zustand"
import { persist } from "zustand/middleware"
import { CartProduct } from "../types/ProductType"


type Cart = {
    cartItems: CartProduct[]
    addItemToCart: (id: number, title: string, brand: string, price: number, discountPercentage: number, thumbnail: string) => void 
    removeItemFromCart: (id: number) => void
    showCart: boolean
    showCartToggle: (status: boolean) => void
    addProductQuantity: (id: number) => void
    reduceProductQuantity: (id: number) => void
    totalPrice: number
    addTotalPrice: (price: number, discountPercentage: number) => void
    reduceTotalPrice: (id: number, price: number, discountPercentage: number) => void
    addPriceQuantity: (id:number,  price: number, discountPercentage: number) => void
    reducePriceQuantity: (id:number,  price: number, discountPercentage: number) => void
}

export const useCartStore = create(persist<Cart>((set) => ({
    cartItems: [],
    addItemToCart: (id: number, title: string, brand: string, price: number, discountPercentage: number, thumbnail: string) => {
        set((state) => ({
            cartItems: [
                ...state.cartItems,
                {
                    id,
                    title,
                    brand,
                    price,
                    discountPercentage,
                    thumbnail,
                    quantity: 1
                } as CartProduct
            ]
        }))
    },
    removeItemFromCart: (id: number) => {
        set((state) => ({cartItems: state.cartItems.filter(item => item.id !== id)}))
    },
    showCart: false,
    showCartToggle: (status: boolean) => {
        set(() => ({
            showCart: status
        }))
    },
    addProductQuantity: (id: number) => {
        set((state) => ({
            cartItems: state.cartItems.map(item => item.id === id ? ({...item, quantity: item.quantity + 1} as CartProduct) : item)
        }))
    },
    reduceProductQuantity: (id: number) => {
        set((state) => ({
            cartItems: state.cartItems.map(item => item.id === id ? ({...item, quantity: item.quantity - 1} as CartProduct) : item)
        }))
    },
    totalPrice: 0,
    addTotalPrice: (price: number, discountPercentage: number) => {
        set((state) => ({
            totalPrice: state.totalPrice + parseInt((price - (price * (discountPercentage / 100))).toFixed(2))
        }))
    },
    reduceTotalPrice: (id: number, price: number, discountPercentage: number) => {
        set((state) => ({
            totalPrice: state.totalPrice - (state.cartItems.filter(item => item.id === id) && parseInt((price - (price * (discountPercentage / 100))).toFixed(2)))
        }))
    },
    addPriceQuantity: (id:number, price: number, discountPercentage: number) => {
        set((state) => ({
            totalPrice: state.totalPrice + (state.cartItems.filter(item => item.id === id) && parseInt((price - (price * (discountPercentage / 100))).toFixed(2)))
        }))
    },
    reducePriceQuantity: (id:number, price: number, discountPercentage: number) => {
        set((state) => ({
            totalPrice: state.totalPrice - (state.cartItems.filter(item => item.id === id) && parseInt((price - (price * (discountPercentage / 100))).toFixed(2)))
        }))
    }
}),
    {
        name: 'cart',
        getStorage: () => localStorage
    }

))