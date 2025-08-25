import React from "react";
import ProductData from "./product_data";
export default class Product extends React.Component {
    constructor() {
        super()
        this.state = ({
        })
    }
    render() {
        const details = [
            {
                id: 1,
                name: 'Laptop',
                price: 50000,
                stock: true,
                category: 'Electronics',
                description: 'High-performance laptop',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 2,
                name: 'Smartphone',
                price: 20000,
                stock: true,
                category: 'Electronics',
                description: 'Latest smartphone model',
                image: 'src/assets/mobile.jpeg'
            },
            {
                id: 3,
                name: 'Headphones',
                price: 2000,
                stock: false,
                category: 'Accessories',
                description: 'Noise-cancelling headphones',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 4,
                name: 'Keyboard',
                price: 1500,
                stock: true,
                category: 'Accessories',
                description: 'Mechanical keyboard',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 5,
                name: 'Mouse',
                price: 800,
                stock: true,
                category: 'Accessories',
                description: 'Wireless mouse',
                image: 'src/assets/laptop_1.jpg'
            }, {
                id: 6,
                name: 'Chair',
                price: 4500,
                stock: true,
                category: 'Furniture',
                description: 'Ergonomic office chair',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 7,
                name: 'Table',
                price: 7000,
                stock: true,
                category: 'Furniture',
                description: 'Study table with drawer',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 8,
                name: 'Monitor',
                price: 12000,
                stock: false,
                category: 'Electronics',
                description: 'Full HD monitor',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 9,
                name: 'Printer',
                price: 8000,
                stock: true,
                category: 'Electronics',
                description: 'All-in-one printer',
                image: 'src/assets/laptop_1.jpg'
            },
            {
                id: 10,
                name: 'BackPack',
                price: 1200,
                stock: true,
                category: 'Accessories',
                description: 'Durable backpack',
                image: 'src/assets/laptop_1.jpg'
            }
        ]
        return (
            <>
                <div className="container mt-4">
                    <div className="row">{
                        details.map((val) => {
                            return (
                                <>
                                    <div className="col-md-4 mb-4" key={val.id}>
                                        <div className="card h-100 shadow-sm">

                                            <ProductData
                                                id={val.id}
                                                name={val.name}
                                                img={val.image}
                                                price={val.price}
                                                category={val.category}
                                                stock={val.stock}
                                                description={val.description}
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </>
        )
    }
}
