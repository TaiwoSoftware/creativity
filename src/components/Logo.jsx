import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href='/'>
        <h1 className="text-4xl text-[#ff5c11] cursor-pointer font-extrabold">
          IT SOLUTIONS
        </h1>
      </Link>
    </>
  );
}
