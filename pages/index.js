import Head from "next/head";
import Image from "next/image";
import Home from "../components/Home";

export const getStaticProps = async () => {
  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  return {
    props: { posts: data },
    revalidate: 10,
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
