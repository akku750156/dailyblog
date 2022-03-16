import axios from "axios";

const URL = "https://dailyblog-server.herokuapp.com";

export const createPost = async (post) => {
  try {
    await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error in createPost API", error);
  }
};

export const newUser = async (user) => {
  try {
    await axios.post(`http://localhost:3002/signup`, user);
  } catch (error) {
    console.log("Error in newUser API", error);
  }
};

export const checkUser = async (user) => {
  try {
    await axios.post(`http://localhost:3002/login`, user);
  } catch (error) {
    console.log("Error in newUser API", error);
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

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error while calling updatePost API", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API", error);
  }
};

export const addCommentPost = async (id, comment) => {
  if (!comment) {
    console.log("Comment to addCommnetPost tk hi nhi pahucha");
  }
  try {
    await axios.post(`${URL}/comment/${id}`, {
      comment: comment,
      created: Date.now(),
    });
  } catch (error) {
    console.log("Error while calling addCommentPost API", error);
  }
};
