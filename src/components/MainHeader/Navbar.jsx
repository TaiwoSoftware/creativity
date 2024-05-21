import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center gap-32">
      <ul>
        <Link href='/'>
          <li className="text-[#e3e4e6] text-3xl ml-4 inline-block">Home</li>
        </Link>
        <Link href='/about'>
          <li className="text-[#e3e4e6] text-3xl ml-4 inline-block">About</li>
        </Link>
        <Link href='/services'>
          <li className="text-[#e3e4e6] text-3xl ml-4 inline-block">Services</li>
        </Link>
        <Link href='/contact'>
          <li className="text-[#e3e4e6] text-3xl ml-4 inline-block">Contact</li>
        </Link>
      </ul>
      <button className="px-7 py-2 text-[#e3e4e6] text-3xl rounded-lg bg-[#ff5c11]">Get started</button>
    </nav>
  );
}
