import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "./components/Layout";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>FizzBuzz Blog. - Contact</title>
            </Head>
            <main className="my-10">
                <h1 className="py-5 font-russo text-amber-950 text-3xl md:text-6xl text-center">
                    Contact Us.
                </h1>
                <p className="py-2 font-poppins text-amber-600 text-lg md:text-xl text-center">
                    Feedback ? Suggestion ? Pitch your blog ideas ?
                </p>
                <section className="flex flex-col lg:flex-row items-center px-10">
                    <Image
                        className="m-10 w-96"
                        src={`${prefix}/images/site-images/blog-contact.jpg`}
                        width={700}
                        height={500}
                        alt="Contact Pic"
                    />
                    <article>
                        <p className="py-2 font-poppins text-gray-600 text-lg md:text-xl">
                            I like to hear your feedbacks and suggestions. You
                            can also pitch your blog idea to me and I will
                            publish your article with your name and contacts in
                            my blog after review.
                        </p>
                        <p className="py-2 font-poppins text-gray-600 text-lg md:text-xl">
                            Please write to me @{" "}
                            <span className="font-righteous cursor-pointer italic hover:text-black hover:underline">
                                bhar.debaditya@gmail.com
                            </span>
                        </p>
                        <p className="py-2 font-poppins text-gray-600 text-lg md:text-xl">
                            Find me on social media:
                        </p>

                        <section className="flex flex-row items-center justify-self-end space-x-4 py-5 text-3xl">
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
                    </article>
                </section>
            </main>
        </Layout>
    );
}
