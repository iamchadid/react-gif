import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
 
  const [categorias, setCategorias] = useState(['One Punch'])

  const handleAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categorias.includes(newCategory)) return 
    setCategorias([newCategory, ...categorias])
  }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
          handleAddCategory={value => handleAddCategory(value)}
        />

          { 
            categorias.map(categoria => (
                <GifGrid 
                  key={categoria}
                  category={categoria}
                />
             ))  
          }

    </>
  )
}

