import imageOne from '../assets/img/card-cover-5.png'
import imageTwo from '../assets/img/card-cover-6.png'
import imageThree from '../assets/img/card-cover-6 (1).png'
import imageFour from '../assets/img/card-cover-7.png'
import Image from 'next/image'

const Showroom = () => {
  return (
    <section className='flex justify-center gap-4 my-10'>
        <div className='relative'>
            <Image src={imageOne} alt='Plates'/>
            <div className='absolute top-7 left-7 flex flex-col gap-3'>
                <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                <h2 className='font-bold text-4xl'>FURNITURE</h2>
                <p className='font-bold text-sm'>Read More</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 relative'>
            <Image src={imageTwo} alt='Basket vase' />
            <div className='absolute top-7 left-7 flex flex-col gap-3'>
                <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                <h2 className='font-bold text-3xl'>FURNITURE</h2>
                <p className='font-bold text-sm'>Read More</p>
            </div>
            <div className='flex gap-4'>
                <div className='relative'>
                    <Image src={imageThree} alt='lamp'/>
                    <div className='absolute top-7 left-7 flex flex-col gap-3'>
                        <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                        <h2 className='font-bold text-3xl'>FURNITURE</h2>
                        <p className='font-bold text-sm'>Read More</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={imageFour} alt='vases'/>
                    <div className='absolute top-7 left-7 flex flex-col gap-3'>
                        <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                        <h2 className='font-bold text-3xl'>FURNITURE</h2>
                        <p className='font-bold text-sm'>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Showroom