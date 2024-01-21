import imageOne from '../assets/img/card-cover-5.png'
import imageTwo from '../assets/img/card-cover-6.png'
import imageThree from '../assets/img/card-cover-6 (1).png'
import imageFour from '../assets/img/card-cover-7.png'
import Image from 'next/image'

const Showroom = () => {
  return (
    <section className='flex flex-wrap justify-center gap-4 my-10'>
        <div className='relative w-11/12 md:w-fit h-96 sm:h-fit overflow-hidden'>
            <Image src={imageOne} alt='Plates' className='object-cover h-96 sm:h-fit'/>
            <div className='absolute top-7 left-7 flex flex-col gap-3'>
                <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                <h2 className='font-bold text-4xl'>FURNITURE</h2>
                <p className='font-bold text-sm'>Read More</p>
            </div>
        </div>
        <div className='flex w-11/12 md:w-fit flex-col gap-4 relative'>
            <div className='relative h-96 sm:h-fit  overflow-hidden border-2'>
                <Image src={imageTwo} alt='Basket vase' className='object-cover h-96 sm:h-fit' />
                <div className='absolute top-7 left-7 flex flex-col gap-3'>
                    <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                    <h2 className='font-bold text-3xl'>FURNITURE</h2>
                    <p className='font-bold text-sm'>Read More</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap gap-4'>
                <div className='relative h-96 sm:h-fit  overflow-hidden'>
                    <Image src={imageThree} alt='lamp' className='w-full object-cover h-96 sm:h-fit'/>
                    <div className='absolute top-7 left-7 flex flex-col gap-3'>
                        <p className='text-[#2DC071] text-sm font-bold'>5 Items</p>
                        <h2 className='font-bold text-3xl'>FURNITURE</h2>
                        <p className='font-bold text-sm'>Read More</p>
                    </div>
                </div>
                <div className='relative h-96 sm:h-fit overflow-hidden '>
                    <Image src={imageFour} alt='vases'  className='w-full object-cover h-96 sm:h-fit'/>
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