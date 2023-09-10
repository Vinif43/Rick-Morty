import React from 'react'
import Image from 'next/image'
import logoFooter from '../../../../public/imgs/image-1.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-green-500 flex justify-center gap-x-6 md:justify-around items-cente py-12 md:py-6">
      <Image src={logoFooter} alt="Rick and Morty Logo" width={70} />
      <div className="flex items-center text-5xl">
        <Link className="" href={'https://www.instagram.com/vinif44/'}>
          {' '}
          <AiFillGithub />
        </Link>
        <Link className="" href={'https://www.instagram.com/vinif44/'}>
          {' '}
          <AiFillLinkedin />
        </Link>
        <Link className="" href={'https://www.instagram.com/vinif44/'}>
          {' '}
          <AiFillInstagram />
        </Link>
      </div>
    </footer>
  )
}
