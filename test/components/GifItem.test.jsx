import { GifItem } from "../../src/components/GifItem";
import { render, screen } from '@testing-library/react';

describe('Pruebas en <GifItem.jsx />', () => { 

    const title='Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe de hacer match con el snapshot', () => { 

       const{container} =render( <GifItem title={title} url={url} />); 
       expect( container ).toMatchSnapshot();

     });

     test('debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GifItem alt={alt} url={url} />); 
        //screen.debug();
       // expect ( screen.getByRole('img').src ).toBe( url );
       const { src, alt} = screen.getByRole('img');
       expect(src).toBe(url);
       expect(alt).toBe(alt);

      });

      test('debe de mostrar el título en el componente', () => { 

        render( <GifItem title={title} url={url} />); // este es nuestro sujeto de pruebas
        expect( screen.getByText(title)).toBeTruthy();


       });


 });