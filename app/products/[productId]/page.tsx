"use client"

import NavBar from "@/app/components/NavBar"
import { SingleProduct } from "@/app/types/ProductType"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import right from '../../assets/svg/right-chevron.svg'
import Image from "next/image"

const ProductDetails = ({params}:{
    params: {productId: string}
}) => {

    const [product, setProduct] = useState<SingleProduct>()
    const [images, setImages] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://dummyjson.com/products/${params.productId}`)
            setProduct(response.data)
            setImages(prevState => [...prevState, ...response.data.images])

        } catch (error) {
            console.log('Error Fetching data', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    let count = 0

    const handleNextImage = () => {
        count = (count + 1) % images.length
        setCurrentImageIndex(count)
    }

    const handlePrevImage = () => {
        const imagesLength = images.length
        count = (currentImageIndex + imagesLength - 1) % imagesLength
        setCurrentImageIndex(count)
    }

  return (
    <main>
        <NavBar />
        <div className="flex gap-2 py-5 px-14 text-xl bg-gray-100 border-4 font-bold border-yellow-300">
            <Link href='/' >Home</Link>
            <Image src={right} alt="right" className="w-6" />
            <p className="text-gray-500">Shop</p>
        </div>
        <section>
            {product && 
            <div>
                <div className="w-98">
                    <Image src={images[currentImageIndex]} width={250} height={250} alt="product image" className="w-96" />
                    <div>
                        <button onClick={handleNextImage}>next</button>
                        <button onClick={handlePrevImage}>previous</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>{product.title}</h1>
                    </div>
                </div>
            </div>
            }
            
        </section>
    </main>
  )
}
export default ProductDetails