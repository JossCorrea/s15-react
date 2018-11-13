import React from "react"// Importar o react pra saber que estamos usando essa biblioteca
import Button from './button'
import Input from './input'
import Label from './label'
import Link from './link'
import './form.css'

function Form(props){
    return (
        <form className='form'>
            <h2 className = 'form__title'>{props.title}</h2>
            <p className = 'form__text'>{props.text}</p>
            {props.children}
        </form>
    )
  }

  Form.Button = Button //Só existe quando tem form (to dizendo que o button está dentro do form)
  Form.Input = Input
  Form.Label = Label
  Form.Link = Link

  export default Form // Exportar para que eu possa pegar em outro arquivo
