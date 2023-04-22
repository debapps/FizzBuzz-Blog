import NavBar from "./Navbar";
import BlogHead from "./BlogHead";
import Footer from "./Footer";
import Head from "next/head";

const prefix = process.env.NEXT_PUBLIC_ASSET_URL || "";

export default function Layout({ children, blogpost }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is FizzBuzz Blog. This is blogging website for technology, science, computer programming, web development, cloud computing, computer architecture, design priciple and pattern."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={prefix + "/favicon/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={prefix + "/favicon/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={prefix + "/favicon/favicon-16x16.png"}
        />
        <link rel="manifest" href={prefix + "/favicon/site.webmanifest"} />
      </Head>
      <header>
        {blogpost ? (
          <NavBar />
        ) : (
          <>
            <NavBar />
            <BlogHead />
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
