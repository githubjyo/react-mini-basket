import React from "react";
import { useLocation } from "react-router-dom";

export default function Orders() {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Order Summary</h2>
            {product ? (
              <div className="row">
                <div className="col-md-5 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded"
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-md-7">
                  <h4>{product.name}</h4>
                  <p className="text-muted">{product.category}</p>
                  <p>{product.description}</p>
                  <h5 className="text-success">₹{product.price}</h5>
                  <p>
                    <strong>Status:</strong>{" "}
                    {product.stock ? (
                      <span className="text-success">In Stock</span>
                    ) : (
                      <span className="text-danger">Out of Stock</span>
                    )}
                  </p>

                  <form>
                    <button type="submit" className="btn btn-primary w-100">
                      Confirm Order
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <p className="text-center text-danger">No product selected!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
