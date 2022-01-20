import React from 'react';
import PropTypes from 'prop-types';


//styles module import
import styles from './Formulario.module.css';

//custom hook import
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'technology', label: 'Tecnología'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'entertaiment', label: 'Entretenimiento'}
    ]

    //using custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //form submit
    const buscarNoticias  = e =>{
        e.preventDefault();

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscardor}row`}>
            <div className="col s12 m8offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Noticias por Categoría</h2>

                    <SelectNoticias/>

                    <div className="input-field">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large red darken-3`}
                            value="Buscar" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}


Formulario.propTypes ={
    guardarCategoria: PropTypes.func.isRequired
}


export default Formulario;