import axios from "axios";
export const getPosts = async (limit = 10, page) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e.messages);
  } finally {
    console.log("Success");
  }
};
