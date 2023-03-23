
import { Link } from "react-router-dom";
import '../styles/layouts/characterDetail.scss';


const CharacterDetail= ({characterFind}) => {
if (characterFind !== undefined){
    return(
    <div className="character">
        <section className="character__section1">
            <img
            className="character__section1--img"
            src={characterFind.image !=='' ? characterFind.image : 'https://i.pinimg.com/originals/58/5a/03/585a039dd24fb37cdfda73806a30b5fb.png'}
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
                <p className='text'>{characterFind.species} </p>
                <h3 className='title'>{characterFind.alternate_names.length ? 'Nombres alternativos' : ''}</h3>
                <p className='text'>{characterFind.alternate_names}</p>
            </div>
        </section>
        <section className="character__section2">
            <Link className="character__section2--link" to={"/"}> ← volver</Link>    
        </section> 
    </div>
    ); 
}else{
    return(
    <section className="character__undefined">
        <p className="character__undefined--p">El personaje que buscas no existe</p>
        <section className="character__section2">
            <Link className="character__section2--link" to={"/"}> ← volver</Link>    
        </section> 
    </section>
    );
};
};

export default CharacterDetail;