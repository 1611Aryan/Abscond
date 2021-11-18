import { Navigate } from "react-router"
import CreateTeam from "./Components/Register/CreateTeam"
import REGISTER_HOME from "./Components/Register/REGISTER_HOME"
import JoinTeam from "./Components/Register/JoinTeam"
import Regsiter from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import AdminLogin from "./Components/Admin/Login"
import AdminSignup from "./Components/Admin/Signup"

import AdminControlPanel from "./Pages/AdminControlPanel"
import Leaderboard from "./Pages/Leaderboard"

const routes = (loggedIn: boolean, admin: boolean) => [
  {
    path: "register",
    element: loggedIn ? <Navigate to="/dashboard" /> : <Regsiter />,
    children: [
      {
        index: true,
        element: <REGISTER_HOME />,
      },
      {
        path: "create",
        element: <CreateTeam />,
      },
      {
        path: "join",
        element: <JoinTeam />,
        children: [{ path: ":guildCode", element: <JoinTeam /> }],
      },
    ],
  },
  {
    path: "leaderboard",
    element: loggedIn ? <Navigate to="/dashboard" /> : <Leaderboard />,
  },
  {
    path: "dashboard",
    element: !loggedIn ? <Navigate to="/" /> : <Dashboard />,
  },
  {
    path: "admin",
    element: loggedIn ? (
      <Navigate to="/dashboard" />
    ) : admin ? (
      <AdminControlPanel />
    ) : (
      <Admin />
    ),
    children: [
      {
        index: true,
        element: <AdminLogin />,
      },
      {
        path: "signup",
        element: <AdminSignup />,
      },
    ],
  },
  {
    path: "*",
    element: loggedIn ? <Navigate to="/dashboard" /> : <Home />,
  },
]

export default routes
