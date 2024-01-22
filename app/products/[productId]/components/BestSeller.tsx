import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Product } from "../../../types/ProductType"
import Link from "next/link"





const BestSeller = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] =useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://dummyjson.com/products?limit=10&select=id,brand,title,price,discountPercentage,thumbnail,category`)
      setProducts(prevState => [...prevState, ...response.data.products])
      
    } catch (error) {
      console.log('Error Fetching data', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  
  

  return (
    <section className="my-10 flex flex-col gap-10 items-center">
        <h3 className=" w-80 md:w-96 text-2xl font-bold ">BESTSELLER PRODUCTS</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {products?.map((product) => {
            return <div key={product.id} className="flex flex-col gap-6 items-center justify-between py-8 shadow-xl">
              <div className="h-[250px] overflow-hidden">
                <Image src={product.thumbnail} width={250} height={250} alt={product.description}/>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <p className="text-gray-500 font-semibold text-xs">{product.brand}</p>
                <p className="font-semibold text-xl w-56 text-center my-3">{product.title}</p>
                <p className="text-gray-500 font-semibold text-sm">{product.category}</p>
                <div className="flex gap-5 items-center">
                  <p className="text-gray-400 font-semibold text-sm">${product.price}</p>
                  <p className="text-[#23856D] font-semibold">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                </div>
                <Link className="bg-[#23A6F0] p-3 font-semibold text-white rounded-xl" href={`/products/${product.id}`}>View Details</Link>
              </div>
              
            </div>
          })}
        </div>
    </section>
  )
}
export default BestSeller