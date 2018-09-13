const initState = {
  posts: [
    { id: "1", title: "Squirtle", body: "Dummy Data" },
    { id: "2", title: "Charmander", body: "More Dummy Data" },
    { id: "3", title: "Pikachu", body: "Just cant get enough Dummy Data" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
