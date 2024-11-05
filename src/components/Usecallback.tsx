import { useEffect } from "react";
import { useState, useCallback } from "react";

function ProductList({ products, filterProducts }) {
    const filteredProducts = filterProducts(products);

    return (
        <ul>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
        </ul>
    );
}

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products] = useState([
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Mango",
    ]);

    const filterProducts = useCallback(
        (items) => {
            return items.filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
            );
        },
        [searchTerm] // وابستگی به searchTerm دارد
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Search products...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ProductList products={products} filterProducts={filterProducts} />
        </div>
    );
}
