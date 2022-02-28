import Head from "next/head";
import Home from "../components/Home";

export const getServerSideProps = async ({ query }) => {
  const username = query.username;
  const category = query.category;

  let data = [];
  let newData = [];

  try {
    const res = await fetch("https://dailyblog-server.herokuapp.com/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
    });
    data = await res.json();
    if (username) {
      newData = await data.filter((p) => p.username === username);
    } else if (category) {
      newData = await data.filter((p) => p.categories === category);
    } else {
      newData = data;
    }
  } catch (error) {
    console.log(error);
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
