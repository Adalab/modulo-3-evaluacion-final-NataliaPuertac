import '../styles/layouts/error.scss';

const Error = ({search}) => {
    return(
    <section className="error">
        <p className="error__p">There are no characters that match your search</p>
    </section>
    );
};

export default Error;