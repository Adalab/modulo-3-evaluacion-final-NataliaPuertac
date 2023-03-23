import '../styles/layouts/filterName.scss';

const FilterName = ({setSearch, search}) =>{

    const handleFilter=(ev)=>{
        ev.preventDefault();
        setSearch(ev.target.value)
    };

    return(
    <>
        <label className="nameLabel" htmlFor="character"> Search by character:
        <input
        className="nameInput"
        type="text"
        id="character"
        name="character"
        placeholder="Ej. Ron Weasley"
        value={search}
        onInput={handleFilter}
        />
        </label> 
    </>
    );
};

export default FilterName;