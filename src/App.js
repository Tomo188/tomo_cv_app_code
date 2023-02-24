import "./App.css";
import { Header } from "./header/Header";
import { Home } from "./home/home";
import CheckOut from "./checkOut/checkOut";
import { Login } from "./login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { changeUser } from "./store/user/user_slice";
import Payment from "./payment/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is " + authUser);
      if (authUser) {
        dispatch(changeUser(authUser));
      } else {
        dispatch(changeUser(null));
      }
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="login" element={<Login />} />
            <Route
              path="payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
