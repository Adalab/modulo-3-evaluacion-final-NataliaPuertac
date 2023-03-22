import '../styles/layouts/error.scss';

const Error = ({search}) => {
    return(
    <section className="error">
        <p className="error__p">No existen personajes que coincidan con tu búsqueda</p>
    </section>
    );
};

export default Error;