import './ProductCategoryRow.css';

export default function ProductCategoryRow({category}: {category: string}) {
  return (
    /* <tr>
        <th>{category}</th>
    </tr> */
    <div id='container-category'>
        <h2>{category}</h2>
    </div>
  )
}
