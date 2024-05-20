import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href='/'>
          <li className="text-[#e3e4e6] ml-4 inline-block">Home</li>
        </Link>
        <Link href='/about'>
          <li className="text-[#e3e4e6] ml-4 inline-block">About</li>
        </Link>
        <Link href='/services'>
          <li className="text-[#e3e4e6] ml-4 inline-block">Services</li>
        </Link>
        <Link href='/contact'>
          <li className="text-[#e3e4e6] ml-4 inline-block">Contact</li>
        </Link>
      </ul>
      <button className="p-4 text-[#e3e4e6] bg-[#ff5c11]">Get started</button>
    </nav>
  );
}
