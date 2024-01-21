import Image from "next/image"
import book from '../assets/svg/bx_bxs-book-reader.svg'
import carbon from '../assets/svg/carbon_book.svg'
import chart from '../assets/svg/uil_arrow-growth.svg'

const Services = () => {
  return (
    <section className="my-10 flex flex-col gap-40">
        <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-gray-600">Featured Products</p>
            <h3 className="text-2xl font-bold">THE BEST SERVICES</h3>
            <p className="text-sm font-semibold text-gray-500">Problems trying to resolve the conflict between</p>
        </div>
        <div className="flex justify-center gap-20">
            <div className="w-64 flex items-center flex-col gap-4">
                <Image src={book} alt="Easy wins" />
                <h1 className="text-2xl font-bold">Easy Wins</h1>
                <p className="text-center text-sm font-semibold text-gray-400">Get your best looking smile now!</p>
            </div>
            <div className="w-64 flex items-center flex-col gap-4">
                <Image src={carbon} alt="Concrete" />
                <h1 className="text-2xl font-bold">Concrete</h1>
                <p className="text-center text-sm font-semibold text-gray-400">Defelcate is most focused in helping your discover your most beautiful smile.</p>
            </div>
            <div className="w-64 flex items-center flex-col gap-4">
                <Image src={chart} alt="Hack growth" />
                <h1 className="text-2xl font-bold">Hack Growth</h1>
                <p className="text-center text-sm font-semibold text-gray-400">Overcame any hurdle or any other problem.</p>
            </div>
        </div>
    </section>
  )
}
export default Services