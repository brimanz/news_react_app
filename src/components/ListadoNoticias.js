import React from 'react';
import PropTypes from 'prop-types';


//component imports
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => {
    return (
        <div className='row'>
            {noticias.map(noticia =>(
                 <Noticia
                    key={noticia.url}
                    noticia={noticia}
                 />
            ))}
        </div>
    );
}


ListadoNoticias.propTypes ={
    noticias: PropTypes.array.isRequired
}


export default ListadoNoticias;
