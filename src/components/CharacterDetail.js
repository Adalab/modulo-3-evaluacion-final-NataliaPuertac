
import { Link } from "react-router-dom";


const CharacterDetail= ({characterFind}) => {

    return(
    <> 
     <Link to={"/"}> ←  volver</Link>
    <section>
        <h2>Detalles del personaje</h2>
        <img
        src={characterFind.image !=='' ? characterFind.image : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${characterFind.name}`}
        alt= {`Imagen de ${characterFind.name}`}
        title= {`Imagen de ${characterFind.name}`}
        />
        <div>
            <h3 className='detail name'>Nombre</h3>
            <p className='text'>{characterFind.name}</p>
        </div>
        <div>
            <h3 className='detail house'>Casa</h3>
            <p className='text'>{characterFind.house}</p>
        </div>
        <div>
            <h3 className='detail status'>Estado</h3>
            <p className='text'>{characterFind.alive ? 'Viv@ 💓 ' : 'Muert@ 💀' }</p>
        </div>
        <div>
            <h3 className='detail gender'>Género</h3>
            <p className='text'>{characterFind.gender}</p>
        </div>
        <div>
            <h3 className='detail specie'>Especie</h3>
            <p className='text'>{characterFind.specie}</p>
        </div>
        <div>
            <h3 className='detail othersnames'>Nombres alternativos</h3>
            <p className='text'>{characterFind.alternatename}</p>
        </div>
    </section>
    </>
    ) 
};

export default CharacterDetail;