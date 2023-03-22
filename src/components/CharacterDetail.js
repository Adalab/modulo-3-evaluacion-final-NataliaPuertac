
import { Link } from "react-router-dom";


const CharacterDetail= ({characterFind}) => {

    return(
    <> 
     <Link to={"/"}> ← volver</Link>
    <section>
        <h2>Detalles del personaje</h2>
        <img
        src={characterFind.image !=='' ? characterFind.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${characterFind.name}`}
        alt= {`Imagen de ${characterFind.name}`}
        title= {`Imagen de ${characterFind.name}`}
        />
        <div>
            <h3 className='title'>Nombre</h3>
            <p className='text'>{characterFind.name}</p>
        </div>
        <div>
            <h3 className='title'>Casa</h3>
            <p className='text'>{characterFind.house}</p>
        </div>
        <div>
            <h3 className='title'>Estado</h3>
            <p className='text'>{characterFind.alive ? 'Viv@ 💓 ' : 'Muert@ 💀' }</p>
        </div>
        <div>
            <h3 className='title'>Género</h3>
            <p className='text'>{characterFind.gender}</p>
        </div>
        <div>
            <h3 className='title'>Especie</h3>
            <p className='text'>{characterFind.specie}</p>
        </div>
        <div>
            <h3 className='title'>Nombres alternativos</h3>
            <p className='text'>{characterFind.alternatename}</p>
        </div>
    </section>
    </>
    ) 
};

export default CharacterDetail;