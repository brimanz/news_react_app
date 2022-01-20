import React from 'react';
import PropTypes from 'prop-types';


//styles module import
import styles from './Noticia.module.css';

const Noticia = ({noticia}) => {
    
    //data extract
    const {url, title, urlToImage, description, source} = noticia;


    const image = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    :null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}    
                
                <div className="card-content">
                    <h3 className={styles.new_title}>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"

                    >Leer mas...</a>
                </div>
            </div>        
        </div>


    );
}


Noticia.propTypes ={
    noticia: PropTypes.object.isRequired
}


export default Noticia;
