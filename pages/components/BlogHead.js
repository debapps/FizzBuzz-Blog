import Link from "next/link";
import Image from "next/image";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function BlogHead() {
  return (
    <Link href={`/`}>
      <div className="px-10 py-5 flex flex-row items-center justify-start bg-orange-50">
        <Image
          src={`${prefix}/images/site-images/FizzBuzzBlog Logo.jpg`}
          alt="FizzBuzzLogo"
          width={100}
          height={100}
          className="inline-block rounded-full"
        />
        <span className="ml-5 text-3xl md:text-7xl font-russo text-amber-950 hover:text-amber-500">
          FizzBuzz Blog.
        </span>
      </div>
    </Link>
  );
}
