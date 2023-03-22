
import { Link } from "react-router-dom";
import '../styles/layouts/characterDetail.scss';


const CharacterDetail= ({characterFind}) => {

    return(
    <div className="character">
        <section className="character__section1">
            <Link className="character__section1--link" to={"/"}> ← volver</Link>    
        </section> 
        <section className="character__section2">
            <img
            className="character__section2--img"
            src={characterFind.image !=='' ? characterFind.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${characterFind.name}`}
            alt= {`Imagen de ${characterFind.name}`}
            title= {`Imagen de ${characterFind.name}`}
            />
            <div>
                <h3 className='title'>Nombre</h3>
                <p className='text'>{characterFind.name}</p>
                <h3 className='title'>Casa</h3>
                <p className='text'>{characterFind.house}</p>               
                <h3 className='title'>Estado</h3>
                <p className='text'>{characterFind.alive ? 'Viv@ 💓 ' : 'Muert@ 💀' }</p>
                <h3 className='title'>Género</h3>
                <p className='text'>{characterFind.gender}</p>
                <h3 className='title'>Especie</h3>
                <p className='text'>{characterFind.species} 👤</p>
                <h3 className='title'>Nombres alternativos</h3>
                <p className='text'>{characterFind.alternate_names}</p>
            </div>
        </section>
    </div>
    ) 
};

export default CharacterDetail;