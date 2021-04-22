import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Signup from "./user/Signup";
import Signin from "./auth/Signin";
import EditProfile from "./user/EditProfile";
import Profile from "./user/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import Menu from "./core/Menu";
import NewShop from "./shop/NewShop";

import Shops from "./shop/Shops";
import MyShops from "./shop/MyShops";
import Shop from "./shop/Shop";
import EditShop from "./shop/EditShop";
import NewProduct from "./product/NewProduct";
import EditProduct from "./product/EditProduct";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import StripeConnect from "./user/StripeConnect";
import ShopOrders from "./order/ShopOrders";
import Order from "./order/Order";
import MyAuctions from "./auction/MyAuctions";
import OpenAuctions from "./auction/OpenAuctions";
import NewAuction from "./auction/NewAuction";
import EditAuction from "./auction/EditAuction";
import Auction from "./auction/Auction";
//////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
// {/* <div id="links">
//   <Link to="/">Home</Link>
//   <Link to="/blog">Blog</Link>
//   <Link to="/blog/new">Add Blog Post</Link>
//   <Link to="/contact">Contact</Link>
// </div> */}

//         // {/* <Route path="/" exact component={HomePage} />
//         <Route path="/home" component={HomePage} />
//         <Route path="/blog" exact component={BlogPage} />
//         <Route path="/blog/new" component={NewBlogPostPage} />
//         <Route path="/contact" component={ContactPage} /> */}
//       </BrowserRouter>
//     </div>
//   );
// }

// import alanBtn from "@alan-ai/alan-sdk-web";

// const COMMANDS = {
//   OPEN_CART: "open-cart",
//   LOGIN: "login",
// };

// export  function useAlan() {
//   const [alanInstance, setAlanInstance] = useState();

//   const openCart = useCallback(() => {
//     alanInstance.playText("Opening shop");
//   }, [alanInstance]);

//   const login = useCallback(() => {
//     alanInstance.playText("Login in");
//   }, [alanInstance]);

//   useEffect(() => {
//     // window.addEventListener(COMMANDS.OPEN_CART, openCart);
//     // return () => {
//     //   window.removeEventListener(COMMANDS.OPEN_CART, openCart);
//     // };

//     window.addEventListener(COMMANDS.LOGIN, login);
//     return () => {
//       window.removeEventListener(COMMANDS.LOGIN, login);
//     };
//   }, [alanInstance, openCart]);

//   useEffect(() => {
//     // if (alanInstance !== null) return;
//     setAlanInstance(
//       alanBtn({
//         top: "15px",
//         left: "15px",
//         key:
//           "a735eb9fd2a5020cebdf54db98e9fa7d2e956eca572e1d8b807a3e2338fdd0dc/stage",

//         onCommand: ({ command }) => {
//           window.dispatchEvent(new CustomEvent(command));
//           // console.log(commandData);
//         },
//       }).activate()
//     );
//   }, []);
//   return null;
// }
////////////

const MainRouter = () => {
  // const commands = [
  //   {
  //     command: ["Go to * page", "Go to *", "Open * page", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];

  // const { transcript } = useSpeechRecognition({ commands });
  // const [redirectUrl, setRedirectUrl] = useState("");
  // const pages = ["home", "signup", "signin"];

  // const urls = {
  //   home: "/",
  //   signup: "/signup",
  //   // "new blog post": "/blog/new",
  //   signin: "/signin",
  // };

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  // let redirect = "";

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     redirect = <Redirect to={urls[redirectUrl]} />;
  //   } else {
  //     redirect = <p>Could not find page: {redirectUrl}</p>;
  //   }
  // }

  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />

        <Route path="/cart" component={Cart} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/shops/all" component={Shops} />
        <Route path="/shops/:shopId" component={Shop} />

        <Route path="/order/:orderId" component={Order} />
        <PrivateRoute
          path="/seller/orders/:shop/:shopId"
          component={ShopOrders}
        />

        <PrivateRoute path="/seller/shops" component={MyShops} />
        <PrivateRoute path="/seller/shop/new" component={NewShop} />
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop} />
        <PrivateRoute
          path="/seller/:shopId/products/new"
          component={NewProduct}
        />
        <PrivateRoute
          path="/seller/:shopId/:productId/edit"
          component={EditProduct}
        />

        <Route path="/seller/stripe/connect" component={StripeConnect} />
        <PrivateRoute path="/myauctions" component={MyAuctions} />
        <PrivateRoute path="/auction/new" component={NewAuction} />
        <PrivateRoute path="/auction/edit/:auctionId" component={EditAuction} />
        <Route path="/auction/:auctionId" component={Auction} />
        <Route path="/auctions/all" component={OpenAuctions} />

        {/* {redirect} */}
      </Switch>
      {/* <button onClick={SpeechRecognition.startListening({ continuous: true })}>
        Start
      </button> */}

      {/* <p id="transcript">Transcript: {transcript}</p> */}
    </div>
  );
};

export default MainRouter;
