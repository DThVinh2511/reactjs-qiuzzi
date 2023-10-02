import { getCookie } from "../helpers/Cookie";

const loginReducer = (state = false, action) => {
  const token = getCookie("token");
  if(token) {
    state = true;
  }
  else{
    state = false;
  }
  switch (action.type) {
    case "CHECK_LOGIN":
      return action.status;
    default:
      return state;
  }
}

export default loginReducer;