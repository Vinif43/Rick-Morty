import React from 'react'
import Image from 'next/image'
import rick from '../.././../../public/imgs/image-2.png'

export default function Welcome() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 via-stone-900 to-stone-900 h-screen">
      <div className="flex flex-col items-center justify-center gap-y-6 h-full">
        <h1 className="text-white text-7xl font-bold">Welcome</h1>
        <Image src={rick} alt="Rick and Morty Logo" width={160} />
      </div>
    </div>
  )
}
