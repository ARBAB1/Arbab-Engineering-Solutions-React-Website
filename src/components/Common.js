import React from "react";
import { Link } from "react-router-dom";
import homeImg from '../images/homeImg.svg'


function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6 pt-5 pt-lg-3 order-2 order-lg-1 justify-content-center flex-column">
                  <h1>
                   {props.name}
                    <strong> Arbab Engineering Solutions</strong>
                  </h1>

                  <p className="my-3 ">
                    We are the team of talented developer making website !
                  </p>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn btn-outline-primary">
                      {props.btnName}
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                    <img src={props.imgSrc} className="img-fluid animated" alt="Home-img"/>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
