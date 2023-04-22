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
        <section className="flex flex-col lg:flex-row items-center px-10 lg:px-5">
          <Image
            className="m-10 shadow-xl shadow-gray-800 rounded-full"
            src={`${prefix}/images/site-images/about-me-1.jpg`}
            alt="My pic"
            width={1120}
            height={800}
          />
          <article>
            <p className="font-poppins text-xl py-2">
              Hello, I am Debaditya Bhar. I am a Softwere Engineer since 2010. I
              worked in different phases of software life cycles: requirement
              gathering, development, production implementation and support.
            </p>
            <p className="font-poppins text-xl py-2">
              I have worked in several technologies. I started my career in
              Mainframe Development. Then, I learned web development and
              technologies. Meanwhile, I worked as Data Analyst with Python.
              Finally, I work as AWS Cloud Engineer.
            </p>
            <p className="font-poppins text-xl py-2">
              I like to learn new things and share those with all as well. For
              this purpose, I started this blog.
            </p>
            <p className="font-poppins text-xl py-2">
              <strong className="font-bold font-russo text-amber-950">
                FizzBuzz Blog
              </strong>{" "}
              is the place where you can find articles on the latest trends in
              web development and AWS cloud technologies world. We regularly
              publish articles, blogs, newsletters, how-to-do recipe documents
              on the latest trends in the information world.
            </p>
            <p className="font-poppins text-xl py-2">
              We also welcome articles from new programmers and author around
              the world.
            </p>
            <p className="font-righteous text-xl py-2">Happy Reading ...</p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
