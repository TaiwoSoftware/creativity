import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <h1 className="text-6xl text-[#ff5c11] cursor-pointer font-extrabold">
          LEEGO
        </h1>
      </Link>
    </>
  );
}
