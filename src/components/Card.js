import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { NavLink } from "react-router-dom";
import service1 from "../images/service1.svg";

function Card(props) {
  return (
    <>
     
              
              <div className="col-md-4 col-10 mx-auto verSpace">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="Card image cap"
                    // width="250px"
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            
            
    </>
  );
}

export default Card;
