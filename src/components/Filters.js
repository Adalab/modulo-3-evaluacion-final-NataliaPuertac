import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import '../styles/layouts/filters.scss';

const  Filters = ({setSearch, setSelect, search}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return(
         <section className='section'>
            <form className='section__form' onSubmit={handleSubmit}>
                <FilterName setSearch={setSearch} search={search}></FilterName>
                <FilterHouse setSelect={setSelect}></FilterHouse>
            </form>
        </section>
    );
};

export default Filters;