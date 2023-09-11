import search from '../search.png';
import './Search.css';

function Search({searchTask, setSearch}){
    
    return(
        <>
        <div className="search">
            <h2><img src={search} alt='search icon'/></h2>
            <input 
                name="buscar"
                placeholder="Pesquisar..."
                type="text"
                value={searchTask}
                onChange={(event) => setSearch(event.target.value)}
                />
        </div>
        
        </>
    )
}
export default Search;