import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// rafc: crea la estructura de un componente de react

// GifExpertApp
// <h2>GifExpertApp</>
// <hr />
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                        key={category}
                        category={category}/>))
                }
            </ol>

        </>
    );
  }
  export default GifExpertApp;