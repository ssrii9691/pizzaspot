import React from "react";
import nonVegPizza from "../../Assets/non_veg.webp";
import VegPizza from "../../Assets/veg.jpg";
import Cooldrink from "../../Assets/cooldrink.jpg";
import chef1 from "../../Assets/chef.png";
import chef2 from "../../Assets/chef2.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const nonvegPizzaitem = () => {
    navigate("/nonVegPizza");
  };

  const VegPizzaItem = () => {
    navigate("/VegPizza");
  };

  const CooldrinkItem = () => {
    navigate("/Sides");
  };
  return (
    <div className="container-fluid displayBackground">
      <div className="ListItems">
        <div className="box row">
          <div className="col-md-6">
            {" "}
            <div className="ListItem">
              <div className="my-3">
                {" "}
                <h3 className="fs-1 text-danger  text-decoration-underline">Non Veg Pizza</h3>
              </div>
              <div className="justify-content-center align-items-center">
                <img
                  src={nonVegPizza}
                  alt=""
                  className="nonVegPizza rounded "
                  onClick={nonvegPizzaitem}
                  width={450}
                  height={300}
                   
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={chef2} className="" alt="" width={450} height={450} />
          </div>
        </div>
        <div className=" box row">
          <div className="col-md-6">
            <img src={chef1} className="m-auto mt-5 rounded-circle d-flex justify-content-center align-items-center" alt="" width={300} height={300} />
          </div>
          <div className="col-md-6">
            {" "}
            <div className="ListItem">
              <div className="my-3">
                {" "}
                <h3 className="fs-1 fw-larger text-danger text-center  text-decoration-underline">Veg Pizza</h3>
              </div>
              <div>
                <img
                  src={VegPizza}
                  alt=""
                  className="VegPizza"
                  onClick={VegPizzaItem}
                  width={500}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" box row">
          <div className="col-md-6">
            {" "}
            <div className="ListItem">
              <div className="my-3">
                {" "}
                <h3 className="fs-1 fw-larger text-danger text-center  text-decoration-underline">Cool Drinks</h3>
              </div>
              <div>
                <img
                  src={Cooldrink}
                  alt=""
                  className="Cool drink mx-5 rounded "
                  onClick={CooldrinkItem}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={chef2} className="" alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
