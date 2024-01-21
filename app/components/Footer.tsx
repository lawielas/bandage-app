import Image from 'next/image'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import twitter from '../assets/svg/twitter.svg'

const Footer = () => {
  return (
    <footer>
        <div className='bg-gray-200 flex flex-col md:flex-row justify-between p-5 md:items-center shadow-xl gap-2'>
            <h3 className='text-2xl md:text-3xl font-bold'>Bandage</h3>
            <div className='flex gap-6'>
                <Image src={facebook} alt='facebook' className='w-8 md:w-12' />
                <Image src={instagram} alt='instagram' className='w-6 md:w-9' />
                <Image src={twitter} alt='twitter' className='w-6 md:w-8' />
            </div>
        </div>
        <div>
            <div className='flex flex-col md:flex-row justify-center gap-10 my-24 px-10 md:px-0'>
                <div className='font-semibold text-gray-500 flex flex-col gap-3'>
                    <h1 className='text-black font-bold'>Company Info</h1>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className='font-semibold text-gray-500 flex flex-col gap-3'>
                    <h1 className='text-black font-bold'>Legal</h1>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className='font-semibold text-gray-500 flex flex-col gap-3'>
                    <h1 className='text-black font-bold'>Features</h1>
                    <p>Business Marketing</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div className='font-semibold text-gray-500 flex flex-col gap-3'>
                    <h1 className='text-black font-bold'>Resources</h1>
                    <p>iOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold'>Get In Touch</h1>
                    <div className=''>
                        <input type="text" placeholder='Your Email' className='border-2 border-gray-200 p-2 rounded-l-md' />
                        <button className='bg-[#23A6F0] p-2 text-white rounded-r-md'>Subscribe</button>
                    </div>
                    <p className='text-sm text-gray-300'>Lorem ipsum sum dolor Amit</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-200 text-gray-600 p-9 font-semibold flex justify-center md:justify-start'>
            <p className='w-64 md:w-fit text-center'>Made With Love By Finland All Rights Reserved</p>
        </div>
    </footer>
  )
}
export default Footer