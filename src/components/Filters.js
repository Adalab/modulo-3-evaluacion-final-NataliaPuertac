import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import '../styles/layouts/filters.scss';

const  Filters = ({setSearch, setSelect, search, handleReset, select}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    };
    return(
         <section className='section'>
            <form className='section__form' onSubmit={handleSubmit}>
                <FilterName setSearch={setSearch} search={search}></FilterName>
                <FilterHouse setSelect={setSelect} select={select}></FilterHouse>
            </form>
            <input
            className='section__btn'
            type="button"
            value="Reset"
            onClick={handleReset}
            />
        </section>
    );
};

export default Filters;