
const tabReducer = (state = "/", action) => {
  switch (action.tab) {
    case "home":
      state = "/"; 
      return state;
    case "topic":
      state = "/topic";
      return state;
    case "anwsers":
      state = "/anwsers";
      return state;
    default:
      break;
  }
  return state;
}

export default tabReducer;