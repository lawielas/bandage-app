import backgroundImage from '../assets/img/unsplash_XEmaJaM-4nE.png'
import Image from "next/image"

const Action = () => {
  return (
    <section className='relative mt-10 md:border-yellow-400 border-4 h-[600px] flex justify-center  items-center'>
        <Image src={backgroundImage} alt='background image' className='w-full h-full object-cover' />
        <div className='absolute flex flex-col gap-5 sm:gap-7 text-center w-[300px] sm:w-[550px]'>
            <h4 className='text-[#23A6F0] font-semibold text-sm md:text-base'>Designing Better Experience</h4>
            <h2 className='text-3xl font-bold'>Problems trying to resolve the conflict between</h2>
            <p>Problems trying to resolve the conflict between the two major realms of Classic physics.</p>
            <p className='text-3xl font-bold text-[#23856D]'>$16.48</p>
            <div className='my-6 sm:my-10'>
                <button className='bg-[#23A6F0] text-white px-7 sm:px-9 py-4 rounded-lg'>ADD YOUR CALL TO ACTION</button>
            </div>
        </div>
    </section>
  )
}
export default Action