
import Product from '../../models/Product';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

interface ProductsByCategory {
    category: string;
    product: Product[];
}

export default function ProductTable({products, filterText, isStockOnly}: {products: Product[], filterText: string, isStockOnly: boolean}) {
    const rows: any[] = [];
    let lastCategory = "";

    products.forEach(product => {
        if(product.name.toLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
            return;
        }

        if(!product.stocked && isStockOnly) {
            return;
        }
        
        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                name={product.name}
                price={product.price}
                stocked={product.stocked}
            />
        );
        lastCategory = product.category;
    });

    return (
        <div className='container-header-product'>
            <div id='header-product'>
                <h2>Nome</h2>
                <h2>Preço</h2>
            </div>
            {rows}
        </div>
    )
}
