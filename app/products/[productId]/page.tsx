"use client"

import NavBar from "@/app/components/NavBar"
import { SingleProduct } from "@/app/types/ProductType"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion'
import right from '../../assets/svg/right-chevron.svg'
import left from '../../assets/svg/left-chevron-black.svg'
import starFilled from '../../assets/svg/star-filled.svg'
import starEmpty from '../../assets/svg/star-empty.svg'
import cart from '../../assets/svg/cart-shopping-black.svg'
import visible from '../../assets/svg/visible.svg'
import heart from '../../assets/svg/heart-black.svg'
import brandOne from '../../assets/img/fa-brands-1.png'
import brandTwo from '../../assets/img/fa-brands-2.png'
import brandThree from '../../assets/img/fa-brands-3.png'
import brandFour from '../../assets/img/fa-brands-4.png'
import brandFive from '../../assets/img/fa-brands-5.png'
import brandSix from '../../assets/svg/fa-brands-6.svg'
import Image from "next/image"
import BestSeller from "./components/BestSeller"
import Footer from "@/app/components/Footer"
import { useCartStore } from "@/app/store/cartStore"
import CartComponent from "@/app/components/CartComponent"
import FavoriteComponent from "@/app/components/FavoriteComponent"
import { useFavoriteStore } from "@/app/store/FavoriteStore"

const ProductDetails = ({params}:{
    params: {productId: string}
}) => {

    const [product, setProduct] = useState<SingleProduct>()
    const [images, setImages] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const {showCart, addItemToCart, cartItems, addTotalPrice} = useCartStore()
    const {showFavorite, addItemToFavorite, favoriteItems} = useFavoriteStore()

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    

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
    <main className="font-montserrat relative flex md:justify-center">
        <ToastContainer />
        <div className={showCart || showFavorite ? "opacity-10" : "w-full"}>
            <NavBar />
            <div className="flex gap-2 py-5 px-14 text-xl bg-gray-100 border-4 font-bold border-yellow-300">
                <Link href='/' >Home</Link>
                <Image src={right} alt="right" className="w-6" />
                <p className="text-gray-500">Shop</p>
            </div>
            <section>
                {loading && <div className="p-10 text-lg md:text-2xl text-center">Loading...</div>}
                {product && 
                <div className="py-10 bg-gray-50">
                    <div className="flex flex-col items-center md:flex-row justify-center gap-20">
                        <div className=" w-11/12 md:w-[400px] relative h-[400px] overflow-hidden">
                            <Image src={images[currentImageIndex]} width={250} height={250} alt="product image" className="w-96 object-cover" />
                            <div className="p-4">
                                <button onClick={handlePrevImage} className="absolute top-1/2 left-0 z-30 h-10 w-10 rounded-full bg-gray-100 flex justify-center items-center">
                                    <Image src={left} alt="next image" className="w-5" />  
                                </button>
                                <button onClick={handleNextImage} className="absolute top-1/2 right-0 z-30 h-10 w-10 rounded-full bg-gray-100 flex justify-center items-center">
                                    <Image src={right} alt="next image" className="w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-11/12 md:w-[550px]">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl">{product.title}</h1>
                                <div className="flex items-center gap-2">
                                    <div className='flex gap-2'>
                                        <Image src={starFilled} alt='star filled' className='w-5' />
                                        <Image src={starFilled} alt='star filled' className='w-5' />
                                        <Image src={starFilled} alt='star filled' className='w-5' />
                                        <Image src={starFilled} alt='star filled' className='w-5' />
                                        <Image src={starEmpty} alt='star empty' className='w-5' />
                                    </div>
                                    <p>{product.rating} rating</p>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <p className="text-gray-400 font-semibold text-base">${product.price}</p>
                                    <p className="text-[#23856D] font-bold text-2xl">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                                    <div className="font-semibold">{product.stock} <span className="text-[#23856D]">available</span></div>
                                </div>
                                <p className="flex md:hidden text-sm text-gray-500 py-6">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>
                            <div className="border-t-2 pt-10 flex flex-col gap-10">
                                <div className="flex gap-4">
                                    <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                                    <div className="bg-green-500 w-8 h-8 rounded-full"></div>
                                    <div className="bg-red-500 w-8 h-8 rounded-full"></div>
                                    <div className="bg-yellow-500 w-8 h-8 rounded-full"></div>
                                </div>
                                <div className="flex gap-5">
                                    <button className="bg-[#23A6F0] p-3 rounded-xl text-white font-semibold">Select Options</button>
                                    <div className="flex gap-4">
                                        <button onClick={() => {
                                            addTotalPrice(product.price, product.discountPercentage);
                                            addItemToCart(product.id, product.title, product.brand, product.price, product.discountPercentage, product.thumbnail)
                                            toast.success("Product added to cart!", {
                                                position: "bottom-right"
                                            })
                                            }} 
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                                            disabled={cartItems.length > 0 && cartItems.some(item => item.id === product.id)}>
                                            <Image src={cart} alt="cart" className="w-6" />
                                        </button>
                                        <button onClick={() => {
                                            addItemToFavorite(product.id, product.title, product.brand, product.thumbnail)
                                            toast.success("Product added to favorites!", {
                                                position: "bottom-right"
                                            })
                                        }} 
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                                            disabled={favoriteItems.length > 0 && favoriteItems.some(item => item.id === product.id)}>
                                            <Image src={heart} alt="favorite" className="w-6" />
                                        </button>
                                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <Image src={visible} alt="visible" className="w-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-10 flex-wrap justify-center gap-5">
                        {images.map((image) => (
                            <Image src={image} alt="image" key={image}  width={50} height={50} className="w-10 h-10 md:w-36 md:h-36 object-cover" />
                        ))}
                    </div>
                    <div className="hidden md:flex flex-col gap-20">
                        <div className="flex justify-center gap-10 font-semibold text-gray-500">
                            <p>Description</p>
                            <p>Additional Infomation</p>
                            <p>Reviews (0)</p>
                        </div>
                        <div className="flex justify-center gap-20">
                            <div className="w-[500px] flex flex-col gap-10">
                                <h1 className="text-2xl font-bold">{product.title}</h1>
                                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="pl-10 border-l-4 border-l-[#23856D]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>
                            <div className="w-96 border-2">
                                <Image src={product.thumbnail} alt="product description" width={300} height={300} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                }
                
            </section>
            <div>
                <div className="hidden md:block">
                    <BestSeller />
                </div>
                <div className="flex flex-wrap gap-20 justify-center items-center py-8 bg-gray-100">
                    <Image src={brandOne} alt="hooli" className="w-[103px] h-[34px]" />
                    <Image src={brandTwo} alt="lyat" className="w-[83px] h-[59px]" />
                    <Image src={brandThree} alt="feather" className="w-[102px] h-[75px]" />
                    <Image src={brandFour} alt="stripe" className="w-[103px] h-[42px]" />
                    <Image src={brandFive} alt="aws" className="w-[104px] h-[64px]" />
                    <Image src={brandSix} alt="reddit" className="w-[76px] h-[72px]" />
                </div>
                <Footer />
            </div>
        </div>
        {showCart && <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={"absolute top-20"}>
            {isClient && <CartComponent />}
        </motion.div>}
        {showFavorite && <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className={"absolute top-20"}>
            {isClient && <FavoriteComponent />}
        </motion.div>}
    </main>
  )
}
export default ProductDetails
