import React, { useEffect, useState, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const COMMANDS = {
  OPEN_CART: "open-cart",
  LOGIN: "login",
};

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();

  // const openCart = useCallback(() => {
  //   alanInstance.playText("Opening shop");
  // }, [alanInstance]);

  // const login = useCallback(() => {
  //   alanInstance.playText("Login in");
  // }, [alanInstance]);

  // useEffect(() => {
  //   // window.addEventListener(COMMANDS.OPEN_CART, openCart);
  //   // return () => {
  //   //   window.removeEventListener(COMMANDS.OPEN_CART, openCart);
  //   // };

  //   window.addEventListener(COMMANDS.LOGIN, login);
  //   return () => {
  //     window.removeEventListener(COMMANDS.LOGIN, login);
  //   };
  // }, [alanInstance, openCart]);

  useEffect(() => {
    // if (alanInstance !== null) return;
    setAlanInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        key:
          "a735eb9fd2a5020cebdf54db98e9fa7d2e956eca572e1d8b807a3e2338fdd0dc/stage",

        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
          // console.log(commandData);
        },
      }).activate()
    );
  }, []);
  return null;
}
