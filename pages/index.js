import Head from "next/head";
import BlogCard from "./components/BlogCard";
import Layout from "./components/Layout";
import { getPostMetaData } from "../utilities/PostData";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";
let bgImgURL1,
  bgImgURL2,
  bgImgURL3 = null;

export default function Home({ postMetaData }) {
  if (prefix != "") {
    bgImgURL1 =
      "bg-[url('/Fizz-Buzz-Blog/images/site-images/blog-background-1.jpg')]";
    bgImgURL2 =
      "bg-[url('/Fizz-Buzz-Blog/images/site-images/blog-background-2.jpg')]";
    bgImgURL3 =
      "bg-[url('/Fizz-Buzz-Blog/images/site-images/blog-background-3.jpg')]";
  } else {
    bgImgURL1 = "bg-[url('/images/site-images/blog-background-1.jpg')]";
    bgImgURL2 = "bg-[url('/images/site-images/blog-background-2.jpg')]";
    bgImgURL3 = "bg-[url('/images/site-images/blog-background-3.jpg')]";
  }
  return (
    <Layout>
      <Head>
        <title>FizzBuzz Blog. - Home</title>
      </Head>
      <main>
        {/* Hero section */}
        <section
          className={`w-full h-[500px]  bg-center bg-cover bg-no-repeat relative bg-fixed bg-opacity-20 ${bgImgURL1}`}
        >
          <article className="absolute top-28 p-20 opacity-100">
            <h1 className="font-russo text-3xl md:text-6xl text-amber-950 p-2 bg-yellow-200 max-w-fit">
              Welcome to FizzBuzz Blog.
            </h1>
            <p className="font-poppins text-lg md:text-2xl text-amber-200 max-w-fit bg-emerald-900 p-2">
              Start your learning journey with me!
            </p>
          </article>
        </section>

        <section
          className={`w-full h-[500px] bg-[url('/Fizz-Buzz-Blog/images/site-images/blog-background-2.jpg')] bg-center bg-cover bg-no-repeat relative bg-fixed bg-opacity-20 ${bgImgURL2}`}
        >
          <article className="absolute top-28 right-4 p-20 opacity-100">
            <p className="font-righteous text-xl md:text-3xl text-amber-200 p-2">
              Exclusive blogs on cutting-edge web development technologies.
            </p>
          </article>
        </section>

        <section
          className={`w-full h-[500px] bg-[url('/Fizz-Buzz-Blog/images/site-images/blog-background-3.jpg')] bg-center bg-cover bg-no-repeat relative bg-fixed bg-opacity-20 ${bgImgURL3}`}
        >
          <article className="absolute top-28 left-4 p-20 opacity-100">
            <p className="font-righteous text-xl md:text-3xl text-amber-900 p-2">
              Comprehensive articles on cloud technologies.
            </p>
          </article>
        </section>

        <section>
          <h1 className="py-10 font-russo text-amber-950 text-2xl md:text-5xl text-center">
            Our Latest Articles.
          </h1>
          <ul className="flex flex-col lg:flex-row flex-wrap items-center justify-center">
            {postMetaData.map((postData) => {
              return (
                <li key={postData.blogID}>
                  <BlogCard
                    blogID={postData.blogID}
                    category={postData.category.toUpperCase()}
                    title={postData.title}
                    date={postData.date}
                    author={postData.author}
                    synopsis={postData.synopsis}
                    coverImg={prefix + postData.coverImg}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

// Get Static Props: SSG
export async function getStaticProps() {
  const allPostMetaData = getPostMetaData();
  // Get the most recent 3 posts.
  const postMetaData = allPostMetaData.slice(0, 3);

  return {
    props: { postMetaData },
  };
}
