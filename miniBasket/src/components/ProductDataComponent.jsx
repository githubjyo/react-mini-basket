import React from "react"
import { useNavigate } from "react-router-dom";

const ProductData = (props) => {
  const nav = useNavigate()

  const ViewProduct = () => {
    //alert('hi')
    nav(`/ProductDetail/${props.id}`);
  }
  return (

    <>
      <div className="card h-100">
        <img src={props.img} className="card-img-top mt-4" alt="Laptop" style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">Laptop</h5>
          <p className="card-text">
            <strong>Price:</strong> {props.price} <br />
            <strong>Category:</strong> {props.category} <br />
            <strong>Description:</strong>{props.description}<br />
            <strong>Stock:</strong>{" "}
            {props.stock ? (
              <span className="text-success">Available</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </p>
        </div>
        <div className=" card-footer text-center">
          <button className="btn btn-primary mx-5" onClick={() => ViewProduct()}>View Details</button>

        </div>
      </div>


    </>
  )
}

export default ProductData;
