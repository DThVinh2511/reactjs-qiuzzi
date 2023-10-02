import LayoutDefault from "../LayoutDefault";
import PriveRouter from "../components/PriveRouter";
import Anwsers from "../pages/Anwsers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Qiuz from "../pages/Qiuz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        element: <PriveRouter />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "topic",
            element: <Topic />
          },
          {
            path: "anwsers",
            element: <Anwsers />
          },
          {
            path: "qiuz/:id",
            element: <Qiuz />
          },
          {
            path: "result/:id",
            element: <Result />
          }
        ]
      }
    ]
  }
];