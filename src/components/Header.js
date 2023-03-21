
const Header = ({setSearch, setSelect, search}) => {

    const handleFilter=(ev)=>{
        ev.preventDefault(ev);
        setSearch(ev.target.value)
    };

    const handleSelect = (ev) => {
        ev.preventDefault(ev);
        const election = ev.currentTarget.value;
        setSelect(election)
      };

    return(
        <header>
            <h1>Harry Potter</h1>
            <section>
                <label htmlFor="character"> Busca por personaje:
                    <input
                    type="text"
                    id="character"
                    name="character"
                    placeholder="Ej. Ron Weasley"
                    value={search}
                    onInput={handleFilter}
                    />
                </label> 
               
                <label htmlFor="house">Selecciona la casa:
                <select id="house" name="select" onChange={handleSelect}>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="">Todas las casas</option>
                </select>
                </label>
            </section>
        </header>
    );
};

export default Header;