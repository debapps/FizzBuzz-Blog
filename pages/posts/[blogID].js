import { getBlogPaths, getBlogContent } from "../../utilities/PostData";
import { getDateFormatted } from "../../utilities/FormatDate";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { AiOutlineArrowLeft } from "react-icons/ai";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function BlogPost(props) {
  const { title, category, date, author, coverImg, blogHTML } = props.blog;
  return (
    <Layout blogpost>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="flex flex-col m-10 space-y-5">
        {/* Blog category */}
        <h3 className="font-russo text-xs tracking-widest mt-2 mb-5 text-amber-300 bg-blue-950 p-2 max-w-fit">
          {category.toUpperCase()}
        </h3>

        {/* Blog title */}
        <h1 className="font-righteous font-extrabold text-6xl md:text-8xl">
          {title}
        </h1>

        {/* Blog author and publication date */}
        <p className="font-poppins font-thin text-base md:text-lg flex flex-row justify-start space-x-5 tracking-wider">
          <span>{author}</span>
          <span>||</span>
          <span>{getDateFormatted(date)}</span>
        </p>

        {/* blog cover image */}
        <div>
          <Image
            className="w-[1400px] mx-auto"
            src={prefix + coverImg}
            width={1400}
            height={1000}
            alt="cover"
          />
        </div>

        {/* Blog content */}
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: blogHTML }}
        ></div>

        {/* Go back link */}
        <Link
          className="max-w-fit text-lg md:text-xl p-2 mx-5 my-3 bg-amber-950 text-orange-50 hover:text-amber-500 border rounded-full shadow-md shadow-amber-500"
          href={`/bloglist`}
        >
          <AiOutlineArrowLeft />
        </Link>
      </article>
    </Layout>
  );
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const allPathIds = getBlogPaths();

  return {
    paths: allPathIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogID = context.params.blogID;
  const blog = await getBlogContent(blogID);

  return {
    props: {
      blog,
    },
  };
}
