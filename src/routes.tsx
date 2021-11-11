import { Navigate } from "react-router"
import CreateTeam from "./Components/Register/CreateTeam"
import REGISTER_HOME from "./Components/Register/REGISTER_HOME"
import JoinTeam from "./Components/Register/JoinTeam"
import Regsiter from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"

const routes = (loggedIn: boolean) => [
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
    path: "dashboard",
    element: !loggedIn ? <Navigate to="/" /> : <Dashboard />,
  },
  {
    path: "*",
    element: loggedIn ? <Navigate to="/dashboard" /> : <Home />,
  },
]

export default routes
