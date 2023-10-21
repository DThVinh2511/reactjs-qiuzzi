import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { checkUsers, createUsers } from "../../services/UsersService";
import { FaLock, FaUser } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import "./Register.scss"
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fullname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const reponse = await checkUsers('email', email);
    if(reponse.length > 0) {
      alert("Email đã tồn tại, vui lòng sử dụng email khác!");
      setLoading(false);
    }
    else {
      const options = {
        fullname: fullname,
        email: email,
        password: password,
        token: generateToken()
      }
      const result = await createUsers(options);
      if(result) {
        alert("Bạn đã đăng kí tài khoản thành công!");
        setLoading(false);
        navigate("/login");
      }
      else{
        alert("Đăng kì thất bại, vui lòng thử lại sau!");
        setLoading(false);
      }
    }
  }
  return (
    <>
      <div className="container-form__register">
        <form onSubmit={hanldeSubmit} className="form-logout">
          <h2 className="form-logout__title">Đăng Kí</h2>
          <div className="form-logout__field">
            <FaUser className="icon-email form-login__icon"/>
            <input placeholder="Họ tên" type="text" className="form-logout__input" required/>
          </div>
          <div className="form-logout__field">
            <HiMail className="icon-email form-login__icon"/>
            <input placeholder="Email" type="email" className="form-logout__input" required/>
          </div>
          <div className="form-logout__field">
            <FaLock className="icon-email form-login__icon" />  
            <input placeholder="Mật khẩu" type="password" className="form-logout__input" required/>
          </div>
            <button type="submit" className={"form-logout__button " + (loading ? ("classic-2") : (""))}>Đăng Kí</button>
        </form>
      </div>
    </>
  )
}

export default Register;