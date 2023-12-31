
import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={() => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value: 'Saitama'} } );

        expect(input.value ).toBe('Saitama');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama'; //creo el valor que voy a evaluar
        const onNewCategory= jest.fn(); //una jest function es un mock

        render( <AddCategory onNewCategory={ onNewCategory} /> ); //se levanta el sujeto de pruebas
        
        const input = screen.getByRole('textbox'); //referencias a input y form
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );//disparo el primer evento del formulario para establecer el valor
        fireEvent.submit(form);

        expect (input.value).toBe('');

        expect (onNewCategory).toHaveBeenCalled();
        expect (onNewCategory).toHaveBeenCalledTimes(1);
        expect (onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar el onNewCategory si el input está vacío', () => { 

        const onNewCategory = jest.fn();
          render( <AddCategory onNewCategory={ onNewCategory} /> );

          const form = screen.getByRole('form');
          fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        

     });


 });