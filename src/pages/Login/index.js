import { checkLogin } from "../../actions/login";
import { setCookie } from "../../helpers/Cookie";
import { login } from "../../services/UsersService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaLock } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import "./Login.scss";
import { useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () => {
  const tabAction = useSelector((state) => state.tabReducer);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target[0].value;
    const password = e.target[1].value;
    const reponse = await login(email, password);
    if (reponse.length > 0) {
      setCookie("id", reponse[0]._id, 1);
      setCookie("fullname", reponse[0].fullname, 1);
      setCookie("email", reponse[0].email, 1);
      setCookie("token", reponse[0].token, 1);
      setLoading(false);
      await Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        showConfirmButton: false,
        timer: 500
      });
      dispath(checkLogin(true));
      navigate(tabAction);
    } else {
      await Swal.fire({
        icon: 'warning',
        title: 'Đăng nhập thất bại! Email hoặc mật khẩu sai!',
        showConfirmButton: false,
        timer: 1500
      })
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container-form">
        <form onSubmit={hanldeSubmit} className="form-login">
          <h2 className="form-login__title">Đăng nhập</h2>
          <div className="form-login__field">
            <HiMail className="icon-email form-login__icon" />
            <input
              placeholder="Email"
              type="email"
              className="form-login__input"
              required
            />
          </div>
          <div className="form-login__field">
            <FaLock className="icon-email form-login__icon" />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="form-login__input"
              required
            />
          </div>
          <button type="submit" className={"form-login__button " + (loading ? ("classic-2") : (""))}>
            Đăng nhập
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
