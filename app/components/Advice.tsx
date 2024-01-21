import imageOne from '../assets/img/unsplash_hHdHCfAifHU.png'
import imageTwo from '../assets/img/unsplash_tVEqStC2uz8.png'
import imageThree from '../assets/img/unsplash_dEGu-oCuB1Y.png'
import clock from '../assets/svg/clock-check.svg'
import right from '../assets/svg/right-chevron.svg'
import chart from '../assets/svg/chart-line.svg'
import Image from 'next/image'

const Advice = () => {
  return (
    <section className='flex flex-col items-center my-32 gap-10'>
        <div className='flex flex-col items-center gap-4'>
            <p className='text-[#23A6F0] font-semibold'>Practice Advice</p>
            <h2 className='text-4xl'>Featured Post</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-10'>
            <div className='flex flex-col gap-3 w-96 shadow-lg p-5'>
                <div className='relative'>
                    <Image src={imageOne} alt='bedroom' />
                    <p className='absolute top-5 left-5 bg-red-500 text-white p-1 font-semibold'>NEW</p>
                </div>
                <div className='flex gap-8 text-sm text-gray-500'>
                    <p className='text-[#23A6F0]'>Google</p>
                    <p>Trending</p>
                    <p>New</p>
                </div>
                <p className='text-2xl'>Loudest a la Madison #1 (L&apos;intgral)</p>
                <p className='text-gray-500'>
                    We focus on erogonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>
                <div className='flex gap-5 justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <Image src={clock} alt='clock' className='w-6' />
                        <p>22 April 2021</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src={chart} alt='chart' className='w-6'/>
                        <p>10 comments</p>
                    </div>
                </div>
                <div className='flex'>
                    <p>Learn More</p>
                    <Image src={right} alt='right' className='w-6' />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-96 shadow-lg p-5'>
                <div className='relative'>
                    <Image src={imageTwo} alt='bedroom' />
                    <p className='absolute top-5 left-5 bg-red-500 text-white p-1 font-semibold'>NEW</p>
                </div>
                <div className='flex gap-8 text-sm text-gray-500'>
                    <p className='text-[#23A6F0]'>Google</p>
                    <p>Trending</p>
                    <p>New</p>
                </div>
                <p className='text-2xl'>Loudest a la Madison #1 (L&apos;intgral)</p>
                <p className='text-gray-500'>
                    We focus on erogonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>
                <div className='flex gap-5 justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <Image src={clock} alt='clock' className='w-6' />
                        <p>22 April 2021</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src={chart} alt='chart' className='w-6'/>
                        <p>10 comments</p>
                    </div>
                </div>
                <div className='flex'>
                    <p>Learn More</p>
                    <Image src={right} alt='right' className='w-6' />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-96 shadow-lg p-5'>
                <div className='relative'>
                    <Image src={imageThree} alt='bedroom' />
                    <p className='absolute top-5 left-5 bg-red-500 text-white p-1 font-semibold'>NEW</p>
                </div>
                <div className='flex gap-8 text-sm text-gray-500'>
                    <p className='text-[#23A6F0]'>Google</p>
                    <p>Trending</p>
                    <p>New</p>
                </div>
                <p className='text-2xl'>Loudest a la Madison #1 (L&apos;intgral)</p>
                <p className='text-gray-500'>
                    We focus on erogonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>
                <div className='flex gap-5 justify-between my-4'>
                    <div className='flex items-center gap-3'>
                        <Image src={clock} alt='clock' className='w-6' />
                        <p>22 April 2021</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src={chart} alt='chart' className='w-6'/>
                        <p>10 comments</p>
                    </div>
                </div>
                <div className='flex'>
                    <p>Learn More</p>
                    <Image src={right} alt='right' className='w-6' />
                </div>
            </div>
        </div>
        
    </section>
  )
}
export default Advice