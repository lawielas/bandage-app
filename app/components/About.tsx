import user from '../assets/img/user.png'
import starFilled from '../assets/svg/star-filled.svg'
import starEmpty from '../assets/svg/star-empty.svg'
import imageOne from '../assets/img/unsplash_0y8p69vwIYM.png'
import imageTwo from '../assets/img/unsplash_0y8p69vwIYM.png'
import imageThree from '../assets/img/unsplash_6_dx4H4yi1Y.png'
import imageFour from '../assets/img/unsplash_GHztzvLLOdQ.png'
import imageFive from '../assets/img/unsplash_UUTOuXqaExk.png'
import imageSix from '../assets/img/unsplash_rhn8ff1G_QY.png'
import imageSeven from '../assets/img/unsplash_jo40QKbxUP0.png'
import imageEight from '../assets/img/unsplash_QLGA5Zv3doo.png'
import imageNine from '../assets/img/unsplash_1R1ecHV4i0Y.png'
import Image from 'next/image'

const About = () => {
  return (
    <section className='flex flex-wrap justify-center gap-20 my-32'>
        <div className='w-[500px] flex flex-col items-center gap-16'>
            <h1 className='text-3xl font-bold'>What they say about us</h1>
            <div className=' flex flex-col items-center gap-6'>
                <Image src={user} alt='user' />
                <div className='flex gap-2'>
                    <Image src={starFilled} alt='star filled' className='w-7' />
                    <Image src={starFilled} alt='star filled' className='w-7' />
                    <Image src={starFilled} alt='star filled' className='w-7' />
                    <Image src={starFilled} alt='star filled' className='w-7' />
                    <Image src={starEmpty} alt='star empty' className='w-7' />
                </div>
                <p className='text-sm w-80 sm:text-base text-center text-gray-500 font-semibold'>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                <div className='flex flex-col gap-2 items-center font-bold'>
                    <h4 className='text-[#23A6F0]'>Regina Miles</h4>
                    <h4>Designer</h4>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 sm:gap-4'>
            <div className='flex gap-2 sm:gap-4'>
                <Image src={imageOne} alt='camera'  />
                <Image src={imageTwo} alt='girl in window' />
                <Image src={imageThree} alt='window peek' />
            </div>
            <div className='flex gap-2 sm:gap-4'>
                <Image src={imageFour} alt='cake' />
                <Image src={imageFive} alt='girl in room' />
                <Image src={imageSix} alt='man writing' />
            </div>
            <div className='flex gap-2 sm:gap-4'>
                <Image src={imageSeven} alt='mountain view' />
                <Image src={imageEight} alt='river flowing' />
                <Image src={imageNine} alt='swimming pool' />
            </div>
        </div>
    </section>
  )
}
export default About