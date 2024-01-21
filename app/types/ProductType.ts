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
  category: string,
  thumbnail: string,
  images: string[]
}