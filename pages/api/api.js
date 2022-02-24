import axios from "axios";

const URL = "http://localhost:3002";

export const createPost = async (post) => {
  try {
    await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error in createPost API", error);
  }
};

export const getAllPosts = async () => {
  try {
    let res = await axios.get(`${URL}/posts`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API", error);
  }
};
