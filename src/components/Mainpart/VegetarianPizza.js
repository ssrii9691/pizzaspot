import React from "react";
import { Controller, useForm } from "react-hook-form";
import { VegetarianList, crusts } from "./Listofmenu";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";

const VegetarianPizza = () => {
  const onSubmit = (data) => {
    console.log(data);
    toast.success("successfully ordered..", {
      position: "top-right",
    });
  };
  const vegToppings = [
    {
      label: "Black olive - Rs.20",
      value: "Black olive - Rs.20",
    },
    {
      label: "Capsicum - Rs.25",
      value: "Capsicum - Rs.25",
    },
    {
      label: "Paneer - Rs.35",
      value: "Paneer - Rs.35",
    },
    {
      label: "Mushroom - Rs.30",
      value: "Mushroom - Rs.30",
    },
    {
      label: "Fresh Tomato - Rs.10",
      value: "Fresh Tomato - Rs.10",
    },
  ];
  const { register, handleSubmit, control } = useForm();
  return (
    <div>
      <h3 className="text-center my-3 fs-2 text-danger text-decoration-underline">Veg Pizzas</h3>

      <div className="container">
        <div className="VegItems">
          {VegetarianList.map((pizza, i) => {
            return (
              <div className="row">
                <div className="col-md-4" key={i}>
                  <div className="">
                    <h3 className="fs-3 text-starting text-decoration-underline text-black">~:{pizza.name}</h3>
                  </div>
                  <div className="p-3">
                    <img
                      src={pizza.image}
                      alt=""
                      className="  "
                      width={250} height={250}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <table className="table table-bordered border-dark my-5">
                    <thead className="bg-warning text-center"
                    >
                      <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Order</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>Regular</td>
                        <td>Rs.{pizza.price.Regular}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Medium</td>
                        <td>Rs.{pizza.price.Medium}</td>
                        <td>
                          <button
                            type="button"
                            className=" btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Large</td>
                        <td>Rs.{pizza.price.Large}</td>
                        <td>
                          <button
                            type="button"
                            className=" btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div
          className="modal fade"
          id="exampleModal"
          aria-hidden="true"
          aria-labelledby="exampleModalLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Extra Toppings and crusts
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="toppings my-2">
                  <label className="headCrust mx-2">
                    Select type of toppings
                  </label>
                  <div className="mb-3 px-2">
                    <Controller
                      name="toppings"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select {...field} options={vegToppings} />
                      )}
                    />
                  </div>
                </div>
                <div className="crust border border-1 px-3 my-2">
                  <label className="headCrust">
                    {" "}
                    Select the Type of Crust :{" "}
                  </label>
                  <div className="mb-3">
                    {crusts.map((crust, i) => {
                      return (
                        <>
                          <div className="form-check py-1 mx-3 fs-5" key={i}>
                            <input
                              className="form-check-input"
                              type="radio"
                              value={crust}
                              name={crust}
                              id={i}
                              {...register("crust")}
                            />
                            <label className="form-check-label" htmlFor={i}>
                              {crust}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-warning"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit(onSubmit)}
                  data-bs-dismiss="modal"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default VegetarianPizza;
