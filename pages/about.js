import Image from "next/image";
import Head from "next/head";
import Layout from "./components/Layout";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>FizzBuzz Blog. - About</title>
            </Head>
            <main className="my-10">
                <h1 className="py-5 font-russo text-amber-950 text-3xl md:text-6xl text-center">
                    About My Blog.
                </h1>
                <section className="flex flex-col-reverse lg:flex-row items-center px-10 lg:px-5">
                    <article className="font-poppins text-xl py-2 flex flex-col space-y-4">
                        <p>
                            <strong className="font-bold font-russo text-amber-950">
                                FizzBuzz Blog
                            </strong>{" "}
                            is the place where you can find articles on the
                            latest trends in web development and AWS cloud
                            technologies world. We regularly publish articles,
                            blogs, newsletters, how-to-do recipe documents on
                            the latest trends in the information world.
                        </p>
                        <p>
                            We also welcome articles from new programmers and
                            author around the world.
                        </p>
                        <p>
                            The name of the blog is inspired by the popular
                            programming problem -{" "}
                            <strong className="font-bold">FizzBuzz</strong>{" "}
                            Problem, which is taught to the novice programmers
                            at the basic foundation cource of programming.
                        </p>
                        <p>
                            It is often called as game of counting where
                            participants have to replace multiple of 3 with the
                            word <strong className="font-bold">Fizz</strong>,
                            the multiple of 5 with the word{" "}
                            <strong className="font-bold">Buzz</strong>, and the
                            multiple of 3 and 5 with the word{" "}
                            <strong className="font-bold">FizzBuzz</strong>. The
                            rest of the numbers remain unchanged. This is also
                            popular interviw question for beginner level
                            programmers.
                        </p>
                        <p>
                            This Blog will publish several Computer programming
                            and architecture related articles for your knowledge
                            and learning.
                        </p>
                    </article>
                    <Image
                        className="m-10 shadow-xl shadow-gray-800 rounded-full w-96"
                        src={`${prefix}/images/site-images/FizzBuzzBlog Logo.jpg`}
                        alt="My pic"
                        width={1120}
                        height={800}
                    />
                </section>
                <hr className="my-10 border-t-0 border-b-4 border-dotted border-amber-950 w-60 mx-auto" />
                <section className="flex flex-col lg:flex-row items-center px-10 lg:px-5">
                    <Image
                        className="m-10 shadow-xl shadow-gray-800 rounded-full w-48"
                        src={`${prefix}/images/site-images/about-me-1.jpg`}
                        alt="My pic"
                        width={1120}
                        height={800}
                    />
                    <article className="font-poppins text-xl py-2 flex flex-col space-y-4">
                        <p>
                            Hello, I am{" "}
                            <strong className="font-bold">
                                Debaditya Bhar
                            </strong>
                            . I am a Softwere Engineer since 2010. I worked in
                            different phases of software life cycles:
                            requirement gathering, development, production
                            implementation and support.
                        </p>
                        <p>
                            I have worked in several technologies. I started my
                            career in Mainframe Development. Then, I learned web
                            development and technologies. Meanwhile, I worked as
                            Data Analyst with Python. Finally, I work as AWS
                            Cloud Engineer.
                        </p>
                        <p>
                            I like to learn new things and share those with all
                            as well. For this purpose, I started this blog.
                        </p>
                        <p className="font-bold font-righteous">
                            Happy Reading ...
                        </p>
                    </article>
                </section>
            </main>
        </Layout>
    );
}
