import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const details = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      stock: true,
      category: "Electronics",
      description: "High-performance laptop",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 20000,
      stock: true,
      category: "Electronics",
      description: "Latest smartphone model",
      image: "src/assets/mobile.jpeg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      stock: false,
      category: "Accessories",
      description: "Noise-cancelling headphones",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      stock: true,
      category: "Accessories",
      description: "Mechanical keyboard",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 5,
      name: "Mouse",
      price: 800,
      stock: true,
      category: "Accessories",
      description: "Wireless mouse",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 6,
      name: "Chair",
      price: 4500,
      stock: true,
      category: "Furniture",
      description: "Ergonomic office chair",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 7,
      name: "Table",
      price: 7000,
      stock: true,
      category: "Furniture",
      description: "Study table with drawer",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 8,
      name: "Monitor",
      price: 12000,
      stock: false,
      category: "Electronics",
      description: "Full HD monitor",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 9,
      name: "Printer",
      price: 8000,
      stock: true,
      category: "Electronics",
      description: "All-in-one printer",
      image: "src/assets/laptop_1.jpg",
    },
    {
      id: 10,
      name: "BackPack",
      price: 1200,
      stock: true,
      category: "Accessories",
      description: "Durable backpack",
      image: "src/assets/laptop_1.jpg",
    },
  ];

  const product = details.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Stock:</strong>{" "}
              {product.stock ? (
                <span className="text-success">Available</span>
              ) : (
                <span className="text-danger">Out of Stock</span>
              )}
            </p>
           <button
              className="btn btn-success mx-3"
              onClick={() => navigate("/orders", { state: product })}
            >
              Buy Now
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate(-1)} 
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
