import { useCartStore } from "../store/cartStore"
import up from '../assets/svg/right-chevron.svg'
import down from '../assets/svg/right-chevron.svg'
import Image from "next/image"

const CartComponent = () => {
    
    const { cartItems, addPriceQuantity, reducePriceQuantity, addProductQuantity, reduceProductQuantity, removeItemFromCart, addTotalPrice, showCartToggle, totalPrice, reduceTotalPrice } = useCartStore()   

  return (
    <section className="bg-white min-w-[600px] min-h-[400px] p-7 z-30 shadow-xl">
        <header className="flex justify-between  py-5">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <h4 className="text-gray-500 text-sm">{cartItems.length} items</h4>
            </div>
            <div className="flex gap-3 items-center">
                <p className="text-gray-500 text-base">total</p>
                <p className="text-xl font-bold text-[#23856D]">$ {cartItems.length === 0 ? 0 : totalPrice}</p>
                <button onClick={() => showCartToggle(false)}>X</button>
            </div>
        </header>
        <div className="flex flex-col gap-6 py-3 justify-between">
            {cartItems.length > 0 && cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 items-start border-t-2 py-3">
                    <div>
                        <Image src={item.thumbnail} alt="product image" width={150} height={150} />
                    </div>
                    <div className="flex flex-col gap-3 w-56">
                        <p className="text-lg font-bold">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.brand}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => {
                            reduceProductQuantity(item.id)
                            reducePriceQuantity(item.id, item.price, item.discountPercentage)
                        }} disabled={item.quantity <= 1}><Image src={down} alt="reduce quantity" className="w-6" /></button>
                        <p className="w-4 text-center text-gray-500">{item.quantity}</p>
                        <button onClick={() => {
                            addProductQuantity(item.id)
                            addPriceQuantity(item.id, item.price, item.discountPercentage)
                        }}><Image src={up} alt="add quantity" className="w-6" /></button>
                    </div>
                    <p className="text-lg font-bold w-28 text-center">${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</p>
                    
                    <button onClick={() => {
                        reduceTotalPrice(item.id, item.price, item.discountPercentage)
                        removeItemFromCart(item.id)
                    }}>del</button>
                </div>
            ))}
            <div className="flex justify-end">
                <button className="bg-[#23A6F0] p-4 text-white rounded-lg text-lg font-semibold">Checkout</button>
            </div>
        </div>
    </section>
  )
}
export default CartComponent