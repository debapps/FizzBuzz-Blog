import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function Footer() {
    return (
        <footer className="text-amber-950 body-font bg-orange-50">
            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={`/`}>
                    <div className="flex flex-row items-center justify-start">
                        <Image
                            src={`${prefix}/images/site-images/FizzBuzzBlog Logo.jpg`}
                            alt="FizzBuzzLogo"
                            width={50}
                            height={50}
                            className="inline-block rounded-full"
                        />
                        <span className="ml-5 text-lg font-russo hover:text-amber-500">
                            FizzBuzz Blog.
                        </span>
                    </div>
                </Link>
                <p className="text-sm font-poppins sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} —
                    <Link
                        href="https://www.linkedin.com/in/debaditya-bhar-6a00074a/"
                        className="hover:text-amber-500 ml-1"
                        rel="noopener noreferrer"
                        target="_blank">
                        debaditya bhar
                    </Link>
                </p>
                <section className="flex flex-row items-center justify-self-end space-x-4 p-5 text-lg">
                    <Link
                        href={`https://www.facebook.com/debadityabhar/`}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-500">
                        <BsFacebook />
                    </Link>
                    <Link
                        href={`https://www.instagram.com/debadityabhar14/`}
                        target="_blank"
                        className="text-pink-600 hover:text-fuchsia-600">
                        <BsInstagram />
                    </Link>
                    <Link
                        href={`https://www.linkedin.com/in/debaditya-bhar-6a00074a/`}
                        target="_blank"
                        className="text-blue-800 hover:text-blue-600">
                        <BsLinkedin />
                    </Link>
                    <Link
                        href={`mailto:bhar.debaditya@gmail.com`}
                        target="_blank"
                        className="text-red-600 hover:text-purple-400">
                        <SiGmail />
                    </Link>
                </section>
            </div>
        </footer>
    );
}
