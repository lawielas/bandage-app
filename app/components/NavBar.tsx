import phone from '../assets/svg/phone.svg'
import email from '../assets/svg/email.svg'
import instagram from '../assets/svg/instagram.svg'
import youtube from '../assets/svg/youtube.svg'
import facebook from '../assets/svg/facebook.svg'
import twitter from '../assets/svg/twitter.svg'
import down from '../assets/svg/down-chevron.svg'
import profile from '../assets/svg/profile.svg'
import search from '../assets/svg/search.svg'
import cart from '../assets/svg/cart-shopping.svg'
import heart from '../assets/svg/heart-blue.svg'
import menu from '../assets/svg/menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCartStore } from '../store/cartStore'
import { useFavoriteStore } from '../store/FavoriteStore'

const NavBar = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const { showCartToggle, cartItems} = useCartStore()
    const { showFavoriteToggle, favoriteItems} = useFavoriteStore()

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <div>
        <section className='hidden md:flex bg-secondaryColor justify-between py-2 md:py-4 px-2 md:px-14 text-base text-white font-bold items-center'>
            <div className='flex gap-2 lg:gap-4'>
                <div className='flex gap-2 items-center'>
                    <Image src={phone} alt='phone' className='w-4 lg:w-6' />
                    <p className='text-xs lg:text-base'>(225) 555-0118</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Image src={email} alt='email' className='w-5 lg:w-7' />
                    <p className='text-xs lg:text-base'>michelle.rivera@example.com</p>
                </div>
            </div>
            <div className='text-xs lg:text-base'>
                Follow Us and get a chance to win 80% off
            </div>
            <div className='flex gap-2 lg:gap-3 items-center'>
                <p className='text-xs lg:text-base'>Follow Us : </p>
                <Image src={instagram} alt='instagram' className='w-4 lg:w-6' />
                <Image src={youtube} alt='youtube' className='w-5 lg:w-7' />
                <Image src={facebook} alt='facebook' className='w-6 lg:w-8' />
                <Image src={twitter} alt='twitter' className='w-4 lg:w-6' />
            </div>
        </section>
        <nav className='py-4 px-4 md:px-14 flex flex-col'>
            <div className=' flex justify-between items-center'>
                <div className='flex gap-7 items-center'>
                    <h1 className='text-xl sm:2xl md:text-3xl lg:text-5xl font-extrabold text-[#252B42]'>Bandage</h1>
                    <div className='hidden md:text-lg md:flex gap-3 lg:gap-7 font-bold text-[#737373] items-center'>
                        <Link href="#">Home</Link>
                        <Link href="#" className='flex gap-2 items-center text-[#252B42]'>
                            <p>Shop</p>
                            <Image src={down} alt='alt' className='w-6' />
                        </Link>
                        <Link href="#">About</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Pages</Link>
                    </div>
                </div>
                <div className='flex gap-3 lg:gap-6 text-sm lg:text-lg text-primaryColor items-center'>
                    <div className='hidden md:flex gap-2 items-center'>
                        <Image src={profile} alt='profile' className='w-4' />
                        <Link href="#" className='font-bold w-fit'>Login / Register</Link>
                    </div>
                    <button className='flex'>
                        <Image src={search} alt='Search' className='w-5 lg:w-6' />
                    </button>
                    <button onClick={() => showCartToggle(true)} className='flex gap-1 items-center'>
                        <Image src={cart} alt='cart' className='w-4 lg:w-6' />
                        {isClient ? <p>{cartItems.length}</p> : <p>0</p>}
                    </button>
                    <button onClick={() => showFavoriteToggle(true)} className='flex gap-1 items-center'>
                        <Image src={heart} alt='heart' className='w-5 lg:w-6' />
                        {isClient ? <p>{favoriteItems.length}</p> : <p>0</p>}
                    </button>
                    <button onClick={handleShowMenu} className='md:hidden flex gap-1 items-center'>
                        <Image src={menu} alt='menu' className='w-5' />
                    </button>
                </div>
            </div>
            {showMenu && <div className='md:hidden flex flex-col text-lg  gap-7 font-bold text-[#737373] items-center my-10'>
                <Link href="#">Home</Link>
                <Link href="#" className='flex gap-2 items-center font-normal text-[#252B42]'>Product</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Contact</Link>
            </div>}
        </nav>
    </div>
  )
}
export default NavBar