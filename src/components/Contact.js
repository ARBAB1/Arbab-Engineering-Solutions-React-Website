import React, { useState } from "react";
function Contact() {
  
  const [data,setData] = useState({
    fullName : "",
    phone: "",
    email: "",
    msg: "",
  
  })

  const InputEvent = (event)=>{
    const {name , value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit =(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullName}. My mibile number is ${data.phone}. My email address is ${data.email}. Here is what i want say that ${data.msg}`)
  
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Your Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  required="required"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="123456789"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required="required"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  required="required"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
