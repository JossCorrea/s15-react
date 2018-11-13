import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './container.css'

function Container(props){
    return (
        <div className ='container'>
            {props.children}
        </div>
    )
  }


export default Container // Exportar para que eu possa pegar em outro arquivo

