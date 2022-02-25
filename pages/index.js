import Head from "next/head";
import Image from "next/image";
import Home from "../components/Home";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3002/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
};

export default function HomePage({ posts }) {
  return (
    <main>
      <Head>
        <title>dailyBlog</title>
      </Head>

      <Home posts={posts} />
    </main>
  );
}
