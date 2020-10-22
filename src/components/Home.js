import React from "react";
import { Link } from "react-router-dom";
import homeImg from '../images/homeImg.svg'
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow Your Business With Us!"
        imgSrc={homeImg}
        visit="/Services"
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
