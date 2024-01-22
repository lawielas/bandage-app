export interface Product  {
  id: number,
  brand: string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  category: string,
  thumbnail: string
  }

export interface SingleProduct {
  id: number,
  brand: string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  category: string,
  thumbnail: string,
  images: string[]
}

export interface CartProduct {
  id: number,
  brand: string,
  title: string,
  price: number,
  discountPercentage: number,
  thumbnail: string,
  quantity: number
}

export interface FavoriteProduct {
  id: number,
  brand: string,
  title: string,
  thumbnail: string
}