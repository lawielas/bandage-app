import close from '../assets/svg/close.svg'
import deleteItem from '../assets/svg/delete.svg'
import Image from "next/image"
import { useFavoriteStore } from "../store/FavoriteStore"

const FavoriteComponent = () => {
    
    const { favoriteItems,  removeItemFromFavorite, showFavoriteToggle} = useFavoriteStore()   

  return (
    <section className="bg-white min-w-[300px] md:min-w-[750px] min-h-[400px] p-5 md:p-7 z-50 shadow-xl">
        <header className="flex justify-between py-5">
            <div className="flex gap-3 items-center">
                <h1 className="text-xl md:text-2xl font-bold">Your Favorites</h1>
                <h4 className="text-gray-500 text-sm">{favoriteItems.length} items</h4>
            </div>
            <button onClick={() => showFavoriteToggle(false)}><Image src={close} alt="close" className="w-10" /></button>
        </header>
        <div className="flex flex-col gap-4 md:gap-6 py-3 justify-between">
            {favoriteItems.length > 0 && favoriteItems.map((item) => (
                <div key={item.id} className="flex gap-14 md:gap-52 items-start border-t-2 py-3">
                    <div className='flex items-start gap-3 md:gap-6'>
                        <Image src={item.thumbnail} alt="product image" width={150} height={150} />
                        <div className="flex flex-col gap-2 md:gap-3 w-40 md:w-56">
                            <p className="text-base md:text-lg font-bold">{item.title}</p>
                            <p className="text-gray-500 text-xs md:text-sm">{item.brand}</p>
                        </div>
                    </div>
                    <button onClick={() => {
                        removeItemFromFavorite(item.id)
                        }}><Image src={deleteItem} alt="remove item" className="w-8 md:w-10" />
                    </button>
                </div>
            ))}
        </div>
    </section>
  )
}
export default FavoriteComponent