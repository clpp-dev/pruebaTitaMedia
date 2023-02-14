import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Page/Login";
import { Posts } from "./Components/Page/Posts";
import { AuthContext } from "./Contexts/Auth/AuthConext";
import { ProtectedRoutes } from "./Router/ProtectedRoutes";

function App() {

  const { userData } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userData?.jti ? <Posts /> : <Login />}/>

        <Route element={<ProtectedRoutes /> }>
          <Route path="/posts" element={<Posts />}/>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
