import React from 'react';
import Form from '../../components/form';
import Container from '../../components/container'

// function Login(){   
//     return(
//         <Container>
//             <Form title = 'Login' text = "Entre com o seu email e senha" >

//                     <Form.Label htmlFor='email'>Email:</Form.Label>
//                     <Form.Input type='email' placeholder="Email" id = "email" required/>

//                     <Form.Label htmlFor='password'>Senha:</Form.Label>
//                     <Form.Input type='password' placeholder="Password" id = "password" minLength = {6} required/>

//                     <Form.Button disabled> Enviar</Form.Button> 

//                     <Form.Link href='#'>Criar conta</Form.Link>
//             </Form>
//         </Container>

//     )
// }
class Login extends React.Component{
    constructor(){
        super()
        this.state = {disabled:true}
        this.email = React.createRef() //Criando referencia
        this.password = React.createRef() //Criando referencia
    }
    onDisabledButton= () =>{
        console.log('this email',this.email.current)
        const inputEmail = this.email.current
        const inputPassword = this.password.current

        if (inputEmail.hasError() || inputPassword.hasError()){
            this.setState({disabled:true})
        }else{
            this.setState({disabled:false})
        }
    }
    render(){
        return(
            <Container>
                <Form title = 'Login' text = "Entre com o seu email e senha" >

                        <Form.Label htmlFor='email'>Email:</Form.Label>
                        <Form.Input ref ={this.email} type='email' placeholder="Email" id = "email" onChange = {this.onDisabledButton} required/>

                        <Form.Label htmlFor='password'>Senha:</Form.Label>
                        <Form.Input ref ={this.password} type='password' placeholder="Password" id = "password" minLength = {6} onChange = {this.onDisabledButton} required/>

                        <Form.Button disabled={this.state.disabled}> Enviar</Form.Button> 

                        <Form.Link href='#'>Criar conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login