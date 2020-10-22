import React from "react";
import service1 from '../images/service1.svg'
import Card from './Card'
import Sdata from './Sdata'

function Services() {
  return (
    <>
      <div className="my-5 text-center">
        <h1>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row">

            {
                Sdata.map((item,index)=>{
                    return(<Card title={item.title} imgSrc={item.imgSrc} key={index}/>)
                })
            }

             

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
