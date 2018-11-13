import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import './alert.css' //Importar o CSS

function Alert(props){
    return (
    <div className={`alert alert__color-${props.cor}`}>
    <p className="alert__texto">{props.children}</p>
    </div>
    )
  }

  export default Alert // Exportar para que eu possa pegar em outro arquivo