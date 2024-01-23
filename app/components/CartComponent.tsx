import { useCartStore } from "../store/cartStore"
import up from '../assets/svg/up-chevron.svg'
import down from '../assets/svg/down-chevron.svg'
import close from '../assets/svg/close.svg'
import deleteItem from '../assets/svg/delete.svg'
import Image from "next/image"

const CartComponent = () => {
    
    const { cartItems, addPriceQuantity, reducePriceQuantity, deleteTotalPrice, addProductQuantity, reduceProductQuantity, removeItemFromCart, addTotalPrice, showCartToggle, totalPrice, reduceTotalPrice } = useCartStore()   

  return (
    <section className="bg-white min-w-[350px] md:min-w-[750px] min-h-[350px] md:min-h-[350px] p-5 md:p-7 z-50 shadow-xl">
        <header className="flex justify-between py-5">
            <div className="flex gap-3 items-center">
                <h1 className=" text-xl md:text-2xl font-bold">Your Cart</h1>
                <h4 className="text-gray-500 text-sm">{cartItems.length} items</h4>
            </div>
            <div className="flex gap-3 items-center">
                <p className="text-gray-500 text-sm md:text-base">total</p>
                <p className="text-lg md:text-xl font-bold text-secondaryColor">$ {cartItems.length === 0 ? 0 : totalPrice.toFixed(2)}</p>
                <button onClick={() => showCartToggle(false)}><Image src={close} alt="close" className="w-7 md:w-10" /></button>
            </div>
        </header>
        <div className="flex flex-col gap-4 md:gap-6 py-3 justify-between">
            {cartItems.length > 0 && cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 md:gap-6 items-start border-t-2 py-3">
                    <div>
                        <Image src={item.thumbnail} alt="product image" width={150} height={150} />
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 w-40 md:w-56">
                        <p className="text-base md:text-lg font-bold">{item.title}</p>
                        <p className="text-gray-500 text-xs md:text-sm">{item.brand}</p>
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
                    <p className="text-base md:text-lg font-bold w-16 md:w-28 text-center">${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</p>
                    
                    <button onClick={() => {
                        deleteTotalPrice(item.id, item.quantity, item.price, item.discountPercentage)
                        removeItemFromCart(item.id)
                    }}><Image src={deleteItem} alt="remove item" className="w-10" /></button>
                </div>
            ))}
            {cartItems.length > 0 && <div className="flex justify-end ">
                <button className="bg-primaryColor p-2 md:p-4 text-white rounded-lg lext-base md:text-lg font-semibold">Checkout</button>
            </div>}
        </div>
    </section>
  )
}
export default CartComponent