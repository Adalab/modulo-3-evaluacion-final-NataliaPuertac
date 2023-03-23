
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
            <div className="character__section1--div">
                <span className="character__section1--span">
                    <h3 className='character__section1--title'>Name:</h3>
                    <p className='character__section1--text'>{characterFind.name}</p>
                </span>
                <span className="character__section1--span">
                    <h3 className='character__section1--title'>House:</h3>
                    <p className='character__section1--text'>{characterFind.house}</p>  
                </span>
                <span className="character__section1--span">         
                    <h3 className='character__section1--title'>Status:</h3>
                    <p className='character__section1--text'>{characterFind.alive ? 'Alive 💓 ' : 'Dead 💀' }</p>
                </span> 
                <span className="character__section1--span">    
                    <h3 className='character__section1--title'>Gender:</h3>
                    <p className='character__section1--text'>{characterFind.gender}</p>
                </span> 
                <span className="character__section1--span"> 
                    <h3 className='character__section1--title'>Species:</h3>
                    <p className='character__section1--text'>{characterFind.species} </p>
                </span>
                <span className="character__section1--span"> 
                    <h3 className='character__section1--title'>{characterFind.alternate_names.length ? 'Alternate names:' : ''}</h3>
                    <p className='character__section1--text'>{characterFind.alternate_names}</p>
                </span>
            </div>
        </section>
        <section className="character__section2">
            <Link className="character__section2--link" to={"/"}> ← Back</Link>    
        </section> 
    </div>
    ); 
}else{
    return(
    <section className="character__undefined">
        <p className="character__undefined--p">The character you're looking for doesn't exist</p>
        <section className="character__section2">
            <Link className="character__section2--link" to={"/"}> ← Back</Link>    
        </section> 
    </section>
    );
};
};

export default CharacterDetail;