import React from "react";
import { sides } from "./Listofmenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sides = () => {
  const addSides = () => {
    toast.success(" Sucessfully Ordered !");
  };
  return (
    <div>
      <h3 className="text-center my-3 fs-2 text-danger text-decoration-underline">Sides</h3>

      <div className="container">
        <div className="">
          {sides.map((side, i) => {
            return (
              <div className="container d-flex justify-content-around">
                <div className="" key={i}>
                  <div>
                    <h3 className="fs-3 text-starting text-decoration-underline text-black">{side.name}</h3>
                  </div>
                  <div className="p-3 rounded">
                    <img src={side.image} alt="" className="nonVegPizza1 " width={250} />
                  </div>
                </div>
                <div className="my-5 ">
                  <h3>price:Rs.{side.price}/-</h3>
                  <div className="mb-3 py-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addSides}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sides;
