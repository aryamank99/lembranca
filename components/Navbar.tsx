import { NAV_LINKS } from "@/constants/index"
import Link from "@/node_modules/next/link"
import Image from "@/node_modules/next/image"
const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 items-center max-container padding-container relative z-30 py-5">
      <ul className="h-full gap-12 lg:flex justify-start items-center">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex justify-center">
        <a>  
          <Image src="/logo.png" alt="logo" width={175} height={175} objectFit="contain"/>
        </a>
      </div>
      <div className="text-right pr-5">
        <p>CALL US AT +123456778</p>
      </div>
    </nav>
  )
}

export default Navbar


