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
import heart from '../assets/svg/cart-shopping.svg'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <section className='flex bg-[#23856D] justify-between p-4 text-base text-white font-bold items-center'>
            <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                    <Image src={phone} alt='phone' className='w-6' />
                    <p>(225) 555-0118</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Image src={email} alt='email' className='w-7' />
                    <p>michelle.rivera@example.com</p>
                </div>
            </div>
            <div>
                Follow Us and get a chance to win 80% off
            </div>
            <div className='flex gap-3 items-center'>
                <p>Follow Us : </p>
                <Image src={instagram} alt='instagram' className='w-6' />
                <Image src={youtube} alt='youtube' className='w-7' />
                <Image src={facebook} alt='facebook' className='w-8' />
                <Image src={twitter} alt='twitter' className='w-6' />
            </div>
        </section>
        <nav className='p-4 flex justify-between items-center'>
            <div className='flex gap-6 items-center'>
                <h1 className='text-5xl font-extrabold text-[#252B42]'>Bandage</h1>
                <ul className='text-lg flex gap-7 font-bold text-[#737373] items-center'>
                    <Link href="#">Home</Link>
                    <Link href="#" className='flex gap-2 items-center text-[#252B42]'>
                        <p>Shop</p>
                        <Image src={down} alt='alt' className='w-6' />
                    </Link>
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">Pages</Link>
                </ul>
            </div>
            <div className='flex gap-6 text-lg text-[#23A6F0]'>
                <div className='flex gap-2 items-center'>
                    <Image src={profile} alt='profile' className='w-4' />
                    <Link href="#" className='font-bold'>Login / Register</Link>
                </div>
                <button className='flex'>
                    <Image src={search} alt='Search' className='w-6' />
                </button>
                <button className='flex gap-1 items-center'>
                    <Image src={cart} alt='cart' className='w-6' />
                    <p>1</p>
                </button>
                <button className='flex gap-1 items-center'>
                    <Image src={heart} alt='heart' className='w-6' />
                    <p>2</p>
                </button>
            </div>
        </nav>
    </div>
  )
}
export default NavBar