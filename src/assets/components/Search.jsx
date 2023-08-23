function Search({searchTask, setSearch}){
    
    return(
        <>
        <div className="search">
            <h2>Pesquisar</h2>
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