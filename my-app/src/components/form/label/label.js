import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './label.css'

function Label(props){
    return (
    <label 
        id = {props.id}
        className = 'label'
        htmlFor = {props.htmlFor}
    >
        {props.children}
    </label>
    )
  }

  export default Label // Exportar para que eu possa pegar em outro arquivo

