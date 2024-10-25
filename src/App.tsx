import Header from "./components/Header"
import { Routes ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Chats from "./pages/Chats"
import NotFound from "./pages/NotFound"
//import { useAuth } from "./context/AuthContext"

function App() {
//  console.log(useAuth()?.isLoggedIn);


  return <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/chat" element={<Chats/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </main>
  
}

export default App
