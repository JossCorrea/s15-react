import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './button.css'

function Button(props){
    let classes = 'button'

    if (props.disabled){
        classes +=' button--disabled'
    }

    return (
        <button 
            disabled = {props.disabled}
            className = {classes}
        >
             {props.children}
        </button>
    )
  }

  export default Button // Exportar para que eu possa pegar em outro arquivo

