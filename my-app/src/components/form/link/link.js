import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './link.css'

function Link(props){
    return (
        <a 
            href = {props.href}
            className ='link'
        > 
            {props.children}
        </a>
    )
  }

  export default Link // Exportar para que eu possa pegar em outro arquivo

