import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './input.css'

function Input(props){
    return (
        <input 
            type = {props.type}
            id = {props.id}
            className ='input'
            placeholder = {props.placeholder}
        />
    )
  }

  export default Input // Exportar para que eu possa pegar em outro arquivo

