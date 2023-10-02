import { useNavigate } from "react-router-dom";
import { deleteAllCookie } from "../../helpers/Cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookie();
  useEffect(() => {
    navigate("/login");
    dispatch(checkLogin(false));
  }, []);
  return (
    <></>
  );
};

export default Logout;