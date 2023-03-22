const FilterHouse = ({setSelect}) => {

    const handleSelect = (ev) => {
        ev.preventDefault();
        const election = ev.currentTarget.value;
        setSelect(election)
      };

    return(
    <>
        <label htmlFor="house">Selecciona la casa:
            <select id="house" name="select" onChange={handleSelect}>   
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">Todas las casas</option>
            </select>
        </label>   
    </>
    )
};

export default FilterHouse;