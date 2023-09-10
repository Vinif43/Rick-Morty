import Image from 'next/image'
import logo from '../.././../../public/Rick-And-Morty-Logo.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-gradient-to-b from-green-900 to-stone-900 text-white font-semibold">
      <Image src={logo} alt="Rick and Morty Logo" width={130} />
      <div className="flex gap-4 max-md:hidden">
        <Link className="hover:text-black" href="/">
          Home{' '}
        </Link>
        <Link className="hover:text-black" href="/character">
          Character{' '}
        </Link>
        <Link className="hover:text-black" href="/episodio">
          Episódios{' '}
        </Link>
      </div>
    </header>
  )
}
