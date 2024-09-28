
import Link from "next/link";
import Image from "next/image";

const Nav = () => {

  return (
    <nav className='mx-auto max-w-[1280px] relative z-50 gap-10 flex justify-between w-full place-items-center py-6 bg-primary-50/95'>
      <Link href='/' className='flex'>
        <Image
          src='/assets/images/darklogo.png'
          alt='logo'
          width={120}
          height={120}
          className='object-contain block'
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-8 text-xl font-medium w-full">
          <li>
            <a href="#invest" className="text-black hover:text-gray-200 transition">Invest</a>
          </li>
          <li>
            <a href="#trade" className="text-black hover:text-gray-200 transition">Trade</a>
          </li>
          <li>
            <a href="#spotlight" className="text-black hover:text-gray-200 transition">Spotlight</a>
          </li>
          <li>
            <a href="#pricing" className="text-black hover:text-gray-200 transition">Pricing</a>
          </li>
          <li>
          <a href="#platform" className="text-black hover:text-gray-200 transition">Platform</a>
          </li>
        </ul>

        <Image
        className="block sm:hidden"
         src="/assets/icons/hamburger_menu.svg"
         alt="hamburger_menu"
         width={40}
         height={50}
        />
    </nav>
  );
};

export default Nav;