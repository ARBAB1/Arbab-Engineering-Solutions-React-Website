import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../images/aboutImg.png";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgSrc={aboutImg}
        visit="/Contact"
        btnName="Contact Now"
      />
    </>
  );
}

export default About;
