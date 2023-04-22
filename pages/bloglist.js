import BlogCard from "./components/BlogCard";
import Layout from "./components/Layout";
import { getPostMetaData } from "../utilities/PostData";
import Head from "next/head";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function BlogList({ postMetaData }) {
  return (
    <Layout blogpost>
      <Head>
        <title>FizzBuzz Blog. - Blogs</title>
      </Head>
      <main className="my-10">
        <h1 className="py-5 font-russo text-amber-950 text-2xl md:text-5xl text-center">
          Articles For You.
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
      </main>
    </Layout>
  );
}

// Get Static Props: SSG
export async function getStaticProps() {
  const postMetaData = getPostMetaData();

  return {
    props: { postMetaData },
  };
}
