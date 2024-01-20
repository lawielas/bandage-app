const Products = () => {
  return (
    <section className="my-10 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-gray-600">Featured Products</p>
            <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
            <p className="text-sm font-semibold text-gray-500">Problems trying to resolve the conflict between</p>
        </div>

        <div className="flex justify-center">
            <button className="text-[#23A6F0] border-2 border-[#23A6F0] py-4 px-6 font-bold">LOAD MORE PRODUCTS</button>
        </div>
    </section>
  )
}
export default Products