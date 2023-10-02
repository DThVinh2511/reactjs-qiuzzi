import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../helpers/Cookie";

function PriveRouter() {
  const islogin = getCookie("token");
  return (
    <>
      {islogin ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
  )
}
export default PriveRouter;