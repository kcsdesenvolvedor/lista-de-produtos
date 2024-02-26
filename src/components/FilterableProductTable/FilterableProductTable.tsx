import './FilterableProductTable.css';

import SearchBar from "../SearchBar/SearchBar";
import ProductTable from '../ProductTable/ProductTable';
import Product from '../../models/Product';
import { useState } from 'react';

export default function FilterableProductTable() {
    const productsDataBase = products;
    const [filterText, setFilterText] = useState("");
    const [isStockOnly, setIsStockOnly] = useState(false);

    return (
        <div className="container">
            <h1>Lista de produtos</h1>
            <SearchBar 
                filterText={filterText}
                isStockOnly={isStockOnly}
                onSetFilterText={setFilterText}
                onSetIsStockOnly={setIsStockOnly}
            />
            <ProductTable 
                products={productsDataBase} 
                filterText={filterText}
                isStockOnly={isStockOnly}
            />
        </div>
    )
}

const products: Product[] = [
    { category: "Frutas", price: "$1", stocked: true, name: "Maçã" },
    { category: "Frutas", price: "$1", stocked: true, name: "Pitaya" },
    { category: "Frutas", price: "$2", stocked: false, name: "Maracujá" },
    { category: "Vegetais", price: "$2", stocked: true, name: "Espinafre" },
    { category: "Vegetais", price: "$4", stocked: false, name: "Abóbora" },
    { category: "Vegetais", price: "$1", stocked: true, name: "Ervilhas" },
];
