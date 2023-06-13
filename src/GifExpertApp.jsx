import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
    
    if (categories.includes(newCategory)) return; //si la categoría ya existe, que no haga nada
    
    setCategories([newCategory, ...categories]); //Esta es una manera de hacerlo
    
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)} //si lleva la palabra on es porque emite algo
      />

      
        {categories.map((category) => (
          <GifGrid 
          key={category} 
          category={category} 
          />
        ))}
      
    </>
  );
};
