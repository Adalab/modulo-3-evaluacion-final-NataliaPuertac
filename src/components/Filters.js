import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const  Filters = ({setSearch, setSelect, search}) => {
    return(
         <section>
            <form>
                <FilterName setSearch={setSearch} search={search}></FilterName>
                <FilterHouse setSelect={setSelect}></FilterHouse>
            </form>
        </section>
    );
};

export default Filters;