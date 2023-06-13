import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );  //la primera vez que se carga es true


    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
  }
  
  useEffect( () => {
      getImages();
  }, []);



  return {
    images, //cuando una varibale apunta a una con el mimo nombre se puede dejar así, con una coma y ya
    isLoading
  };
};
