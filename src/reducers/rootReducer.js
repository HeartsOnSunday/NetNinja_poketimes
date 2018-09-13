const initState = {
  post: [
    { id: "1", title: "Dummy Data", body: "Loren ipsum..." },
    { id: "2", title: "More Dummy Data", body: "Doren ipsum..." },
    { id: "3", title: "So Much Dummy Data", body: "Foren ipsum..." }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

console.log(initState);

export default rootReducer;
