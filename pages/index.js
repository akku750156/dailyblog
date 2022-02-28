import Head from "next/head";
import Home from "../components/Home";

export const getServerSideProps = async ({ query }) => {
  const username = query.username;
  const category = query.category;

  const res = await fetch("https://dailyblog-server.herokuapp.com/posts");
  const data = await res.json();
  let newData = data;
  if (username) {
    newData = await data.filter((p) => p.username === username);
  } else if (category) {
    newData = await data.filter((p) => p.categories === category);
  }

  return {
    props: { posts: newData },
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
