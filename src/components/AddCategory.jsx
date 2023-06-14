import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();// evitar refresh del navegador web
        if( inputValue.trim().length <= 1) return; //esto es para que en la cajita del input, se escriba al menos algo de 2 cifrad o letras

     // setCategories( categories => [ inputValue, ...categories ]);
     setInputValue('');
     onNewCategory( inputValue.trim() );
 }

 return (
     <form onSubmit={ onSubmit }>
         <input 
             type="text"
             placeholder="Buscar gifs"
             value={ inputValue }
             onChange={ onInputChange }
         />
     </form>
 )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}