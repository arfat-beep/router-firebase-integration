import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Register from "./Register/Register";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import RequireAuth from "./RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/products" element={<Products></Products>} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
              </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
