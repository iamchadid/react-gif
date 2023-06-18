import { useState } from "react"




export const AddCategory = ({handleAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length < 1 ) return
        handleAddCategory(inputValue.trim())
        setInputValue('')
        
    }


  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue}
            placeholder="Buscar gifs"
            onChange={handleInputChange}
        />
    </form>
  )
}
