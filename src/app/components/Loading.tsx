import Image from 'next/image'
import rick from '../../../public/imgs/image-2.png'

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image src={rick} alt="Rick and Morty Logo" width={250} />
      <h1 className="text-4xl text-white">Loading...</h1>
    </div>
  )
}
