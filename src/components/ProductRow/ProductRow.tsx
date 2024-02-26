import Product from '../../models/Product';
import './ProductRow.css';

export default function ProductRow({name, price, stocked}: {name: string, price: string, stocked: boolean}) {

    return (
    <div id='container-product-row'>
        <div id='products'>
            <div id='product-name'>
                <p style={{color: stocked ? '#ffffffde' : 'red'}}>{name}</p>
            </div>
            <div id='product-price'>
                <p>{price}</p>
            </div>
        </div>
    </div>
  )
}
