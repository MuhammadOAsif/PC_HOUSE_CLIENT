import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Header/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Pages/Footer/Footer";
import Login from "./Components/Pages/Log/Login/Login";
import Signup from "./Components/Pages/Log/Signup/Signup";
import ForgotPasswordPage from "./Components/Auth/ForgotPasswordPage";
import Motherboard from "./Components/FeaturedCategory/Motherboard";
import Processor from "./Components/FeaturedCategory/Processor";
import CpuCooler from "./Components/FeaturedCategory/CpuCooler";
import Ram from "./Components/FeaturedCategory/Ram";
import RequireAuth from "./Components/Hooks/Custom/RequreAuth/RequireAuth";
import Inventory from "./Components/Pages/Home/InventorySection/Inventory/Inventory";
import InventoryItem from "./Components/Pages/Home/InventorySection/InventoryItem/InventoryItem";
import ManageInventory from "./Components/Pages/Home/InventorySection/ManageInventory/ManageInventory";
import NotFound from "./Components/Pages/NotFound/NotFound";
import AddNewItem from "./Components/Pages/Home/InventorySection/ManageInventory/AddNewItem/AddNewItem";
import MyItem from "./Components/Pages/MyItem/MyItem";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Review from "./Components/Pages/Review/Review";
import { ToastContainer } from "react-toastify";
import Support from "./Components/Pages/Support/Support";
import SendEmailVerification from "./Components/Auth/SendEmailVerification/SendEmailVerification";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/support" element={<Support />} />

        <Route path="*" element={<NotFound />} />
        {/* protected route  */}
        <Route
          path="/inventoryItem/:id"
          element={
            <RequireAuth>
              <SendEmailVerification>{<InventoryItem />}</SendEmailVerification>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/manageInventory"
          element={
            <RequireAuth>
              <SendEmailVerification>
                {<ManageInventory />}
              </SendEmailVerification>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="inventory/manageInventory/addNewItem"
          element={
            <RequireAuth>
              <SendEmailVerification>{<AddNewItem />}</SendEmailVerification>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <SendEmailVerification>{<MyItem />}</SendEmailVerification>
            </RequireAuth>
          }
        ></Route>

        {/* Featured Category */}

        <Route path="/motherboard" element={<Motherboard />} />
        <Route path="/processor" element={<Processor />} />
        <Route path="/ram" element={<Ram />} />
        <Route path="/cpuCooler" element={<CpuCooler />} />

        {/* Authentications */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
