import '../styles/layouts/filterHouse.scss';

const FilterHouse = ({setSelect, select}) => {

    const handleSelect = (ev) => {
        ev.preventDefault();
        const election = ev.currentTarget.value;
        setSelect(election)
      };

    return(
    <>
        <label className="houseLabel" htmlFor="house">Select the house:
            <select value={select} className="houseInput" id="house" name="select" onChange={handleSelect}>   
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="">All the houses</option>
            </select>
        </label>   
    </>
    );
};

export default FilterHouse;