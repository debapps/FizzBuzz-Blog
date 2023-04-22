import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row flex-wrap justify-center lg:justify-end items-center font-russo text-sm md:text-xl p-5 text-amber-950 bg-orange-50">
      <Link className="mr-5 hover:text-amber-500" href={`/`}>
        Home
      </Link>
      <Link className="mr-5 hover:text-amber-500" href={`/bloglist`}>
        Blogs
      </Link>
      <Link className="mr-5 hover:text-amber-500" href={`/about`}>
        About
      </Link>
      <Link className="mr-5 hover:text-amber-500" href={`/contact`}>
        Contacts
      </Link>
    </nav>
  );
}
