import React from "react";

import HeaderPart from "./components/HeaderPart";
import FooterPart from "./components/FooterPart";
import GoToTopLink from "./components/GoToTopLink";
import HeroPart from "./components/HeroPart";
import Loader from "./components/Loader";

export default function Layout({ children }) {
  return (
    <>
      <Loader />
      <HeaderPart />
      <HeroPart />
      {children}
      <FooterPart />
      <GoToTopLink />
    </>
  );
}
