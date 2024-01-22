import up from '../assets/svg/right-chevron.svg'
import down from '../assets/svg/right-chevron.svg'
import Image from "next/image"
import { useFavoriteStore } from "../store/FavoriteStore"

const FavoriteComponent = () => {
    
    const { favoriteItems, addItemToFavorite, removeItemFromFavorite, showFavoriteToggle} = useFavoriteStore()   

  return (
    <section className="bg-white min-w-[600px] min-h-[400px] p-7 z-50">
        <header className="flex justify-between py-5">
            <div className="flex gap-3 items-center">
                <h1 className="text-xl font-bold">Your Favorites</h1>
                <h4 className="text-gray-500 text-sm">{favoriteItems.length} items</h4>
            </div>
            <button onClick={() => showFavoriteToggle(false)}>X</button>
        </header>
        <div className="flex flex-col gap-10 py-3">
            {favoriteItems.length > 0 && favoriteItems.map((item) => (
                <div key={item.id} className="flex gap-52 items-start border-t-2 py-3">
                    <div className='flex items-start gap-6'>
                        <Image src={item.thumbnail} alt="product image" width={150} height={150} />
                        <div className="flex flex-col gap-3 w-56">
                            <p className="text-lg font-bold">{item.title}</p>
                            <p className="text-gray-500 text-sm">{item.brand}</p>
                        </div>
                    </div>
                    <button onClick={() => {
                        removeItemFromFavorite(item.id)
                        }}>del
                    </button>
                </div>
            ))}
        </div>
    </section>
  )
}
export default FavoriteComponent