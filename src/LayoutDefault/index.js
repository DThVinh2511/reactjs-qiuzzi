import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../helpers/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { checkTab } from "../actions/tab";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaAlignJustify } from "react-icons/fa6"

function LayoutDefault() {
  const token = getCookie("token");
  const fullname = getCookie("fullname");
  const email = getCookie("email");
  const isLogin = useSelector(state => state.loginReducer);
  const [ home, setHome ] = useState(false);
  const [ show, setShow ] = useState(false);
  const [ infor, setInfor ] = useState(false);
  const [ topic, setTopic ] = useState(false);
  const [ anwsers, setAnwsers ] = useState(false);
  const dispatch = useDispatch();
  let tabAction = "home";
  const hanldeClick = (tab) => {
    if(tab === "tab-home") {
      setHome(true);
      setTopic(false);
      setAnwsers(false);
      tabAction = "home";
    }
    else if(tab === "tab-topic") {
      setHome(false);
      setTopic(true);
      setAnwsers(false);
      tabAction = "topic";
    }
    else {
      setHome(false);
      setTopic(false);
      setAnwsers(true);
      tabAction = "anwsers";
    }
    dispatch(checkTab(tabAction));
  }
  const hanldeShowMenu = () => {
    setShow(!show);
  }
  const showInfor = () => {
    setInfor(!infor);
  }
  return (
    <>
      <div className="layout-default">
        <div className="section1">
          <div className="containerr">
            <header className="header">
              <div className="header__inner">
                <div className="logo">
                  <Link to="/" className="logo-image" onClick={() => hanldeClick("tab-home")}>
                    Quiz
                  </Link>
                </div>
                <ul className="header_menu">
                  {token ? (
                    <>
                      <li>
                        <NavLink 
                          to="/" 
                          className={"link menu_link tab " + (home && "active-link")}  
                          id="tab-home"
                          onClick={() => hanldeClick("tab-home")}
                        >Home</NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/topic" 
                          className={"link menu_link tab " + (topic && "active-link")}
                          id="tab-topic" 
                          onClick={() => hanldeClick("tab-topic")}
                        >Topic</NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/anwsers" 
                          className={"link menu_link tab " + (anwsers && "active-link")}
                          id="tab-anwsers" 
                          onClick={() => hanldeClick("tab-anwsers")} 
                        >Anwsers</NavLink>
                      </li>
                      <li className="header_menu--small" onClick={hanldeShowMenu}>
                        {/* <FaAlignJustify /> */}
                        <div className={"header_menu__inner " + (show ? ("header_menu--active") : (""))}></div>
                      </li>
                    </>
                  ) : (
                    <NavLink to="/" className="link-home">Home</NavLink>
                  )}
                </ul>
                <div className="actions-users">
                  {token ? (
                    <>
                      <div className="infor-users">
                        <HiOutlineUserCircle className="infor-users__icon" onClick={showInfor}/>
                        <ul className={(infor && ("infor-users__show"))}>
                          <li>Họ tên: {fullname}</li>
                          <li>Email: {email}</li>
                          <li className="infor-users__social">
                            <a href="https://www.facebook.com/DoThVinh" className="infor-users__social--fb infor-users__social--item" target="blank">
                              <FaFacebookF/>
                            </a>
                            <span className="infor-users__social--in infor-users__social--item">
                              <FaInstagram />
                            </span>
                            <span className="infor-users__social--tw infor-users__social--item">
                              <FaTwitter />
                            </span>
                          </li>
                          <li><NavLink to="/logout" className="link infor-users__logout" onClick={showInfor}>Đăng xuất</NavLink></li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="link" >Đăng nhập</Link>
                      <Link to="/register" className="link">Đăng kí</Link>
                    </>
                  )}
                </div>
              </div>
              <ul className={"menu " + (show && ("show-menu"))}>
                  <li>
                    <Link
                      to="/" 
                      onClick={hanldeShowMenu}
                    >Home</Link>
                  </li>
                  <li>
                    <Link 
                      to="/topic"
                      onClick={hanldeShowMenu} 
                    >Topic</Link>
                  </li>
                  <li>
                    <Link 
                      to="/anwsers"
                      onClick={hanldeShowMenu} 
                    >Anwsers</Link>
                  </li>
              </ul>
            </header>
          </div>
        </div>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <div className="infor-users__social footer__social">
            <a href="https://www.facebook.com/DoThVinh" className="footer__social--item" target="blank">
              <FaFacebookF className="infor-users__social--item footer__social--item--icon infor-users__social--fb" />
              <span className="footer__social--item--text-fb footer__social--item--text">Facebook</span>
            </a>
            <span className="footer__social--item">
              <FaInstagram className="infor-users__social--item footer__social--item--icon infor-users__social--in" />
              <span className="footer__social--item--text-in footer__social--item--text">Instagram</span>
            </span>
            <span className="footer__social--item">
              <FaTwitter className="infor-users__social--item footer__social--item--icon infor-users__social--tw" />
              <span className="footer__social--item--text-tw footer__social--item--text">Twitter</span>
            </span>
          </div>
          <div className="footer__text">
            copyright @ 2023 by DTVinh
          </div>
        </footer>
      </div>
    </>
  )
}
export default LayoutDefault;