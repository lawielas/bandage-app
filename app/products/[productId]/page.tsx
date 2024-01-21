"use client"

import NavBar from "@/app/components/NavBar"
import { SingleProduct } from "@/app/types/ProductType"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import right from '../../assets/svg/right-chevron.svg'
import starFilled from '../../assets/svg/star-filled.svg'
import starEmpty from '../../assets/svg/star-empty.svg'
import cart from '../../assets/svg/cart-shopping.svg'
import visible from '../../assets/svg/cart-shopping.svg'
import heart from '../../assets/svg/cart-shopping.svg'
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
        <div className="flex gap-2 py-5 px-5 md:px-14 text-base md:text-xl bg-gray-100 border-4 font-bold border-yellow-300">
            <Link href='/' >Home</Link>
            <Image src={right} alt="right" className="w-5 md:w-6" />
            <p className="text-gray-500">Shop</p>
        </div>
        <section>
            {loading && <div className="p-10 text-xl">Loading...</div>}
            {product && 
            <div>
                <div className="flex">
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
                            <div className='flex gap-2'>
                                <Image src={starFilled} alt='star filled' className='w-7' />
                                <Image src={starFilled} alt='star filled' className='w-7' />
                                <Image src={starFilled} alt='star filled' className='w-7' />
                                <Image src={starFilled} alt='star filled' className='w-7' />
                                <Image src={starEmpty} alt='star empty' className='w-7' />
                            </div>
                            <div className="flex gap-5 items-center">
                                <p className="text-gray-400 font-semibold text-sm">${product.price}</p>
                                <p className="text-[#23856D] font-semibold">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                            </div>
                            <div>{product.stock} <span className="text-[#23856D]">available</span></div>
                        </div>
                        <div>
                            <div>
                                <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                                <div className="bg-green-500 w-8 h-8 rounded-full"></div>
                                <div className="bg-red-500 w-8 h-8 rounded-full"></div>
                                <div className="bg-yellow-500 w-8 h-8 rounded-full"></div>
                            </div>
                            <button>Select Options</button>
                            <div>
                                <Image src={heart} alt="favorite" className="w-6" />
                                <Image src={cart} alt="favorite" className="w-6" />
                                <Image src={visible} alt="favorite" className="w-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    {images.map((image) => (
                        <Image src={image} alt="image" key={image}  width={50} height={50} />
                    ))}
                </div>
                
            </div>
            }
            
        </section>
    </main>
  )
}
export default ProductDetails
