import React from "react"
// import React,{ Component } from "react"

// Importar o react pra saber que estamos usando essa biblioteca
//O Component é um elemento do REACT
import './input.css'

// Definição inicial como função

//Vc usa function quando vc tem um unico estado, mas coisas que precisam de estado precism ser definidos como classe

// function Input(props){
//     return (
//         <input 
//             onChange = {}
//             type = {props.type}
//             id = {props.id}
//             className ='input'
//             placeholder = {props.placeholder}
//         />
//     )
//   }

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = { erro : false }//Guardar o estado do elemento
        // this.handleChange = this.handleChange.bind(this) //Você tem que usar o bind para que o browser entenda que o this é referente a este elemento
    }
    handleChange = (e) =>{ //Substitui o bind
        const value = e.target.value
        let message = ''
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log('Hello onchange', value)
        if (this.props.required && value.trim()===''){
            message = 'Campo obrigratório'
            //Se entrar no erro muda o estado 
        }else if(this.props.minLength && value.length < this.props.minLength){
            message = `Digite pelo menos ${this.props.minLength} caracteres`
        }else if(this.props.type === 'email' && !regex.test(value)){
            message = 'Digite um email válido'
        }
        this.setState({erro : message})
        return
    }
    render() {
        return (
            <React.Fragment> 
                <input 
                    onChange = {this.handleChange}
                    onBlur = {this.handleChange}
                    type = {this.props.type}
                    id = {this.props.id}
                    className ='input'
                    placeholder = {this.props.placeholder}
                    required = {this.props.required}
                />
                <p className = 'input__erro'>{this.state.erro}</p>
            </React.Fragment>
        )
    }
}

// React fragment é para não precisar criar uma div para abracar os elementos, eu crio um fragmento no DOM
export default Input // Exportar para que eu possa pegar em outro arquivo

