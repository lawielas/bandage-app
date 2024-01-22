import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { LoadingComponent } from "../utils/LoadingComponent"
import { Product } from "../types/ProductType"
import Link from "next/link"





const Products = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] =useState(false)
  const [skip, setSkip] = useState(0)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=id,brand,title,price,discountPercentage,thumbnail,category`)
      setProducts(prevState => [...prevState, ...response.data.products])
      setSkip((prevState) => prevState + 10)
      
    } catch (error) {
      console.log('Error Fetching data', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleLoadMore = () => {
    fetchProducts()
  }
  
  

  return (
    <section className="my-10 flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-3 w-80 md:w-96 text-center">
            <p className="font-semibold text-gray-600">Featured Products</p>
            <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
            <p className="text-sm font-semibold text-gray-500">Problems trying to resolve the conflict between</p>
        </div>
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
                  <p className="text-secondaryColor font-semibold">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</p>
                </div>
                <Link className="bg-primaryColor p-3 font-semibold text-white rounded-xl" href={`/products/${product.id}`}>View Details</Link>
              </div>
              
            </div>
          })}
        </div>
        <div className="flex justify-center">
            <button onClick={handleLoadMore} className="text-primaryColor border-2 border-primaryColor py-4 px-6 font-bold w-60" disabled={loading || products.length===100}>
              {loading ? <LoadingComponent /> : <span>Load more products</span>}
            </button>
        </div>
    </section>
  )
}
export default Products