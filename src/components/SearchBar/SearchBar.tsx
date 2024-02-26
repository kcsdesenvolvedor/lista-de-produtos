
import './SearchBar.css';

export default function SearchBar(
    {
      filterText, 
      isStockOnly,
      onSetFilterText,
      onSetIsStockOnly
    }: 
    {
      filterText: string, 
      isStockOnly: boolean,
      onSetFilterText: (filterText: string) => void,
      onSetIsStockOnly: (isStockOnly: boolean) => void
    }
  ) {
  return (
    <div className="container-search">
        <input 
          type="text" 
          id="input-search"  
          placeholder='pesquisa'
          value={filterText}
          onChange={(e) => onSetFilterText(e.target.value)}
        />
        <div>
            <input 
              type="checkbox" 
              id="check-search" 
              checked={isStockOnly}
              onChange={(e) => onSetIsStockOnly(e.target.checked)}
            />
            <span>Mostrar apenas produtos em estoque</span>
        </div>
    </div>
  )
}
