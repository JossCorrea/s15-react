import React from 'react';
import Form from '../../components/form';
import Container from '../../components/container'

function Login(){   
    return(
        <Container>
            <Form title = 'Login' text = "Entre com o seu email e senha" >

                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input type='email' placeholder="Email" id = "email" required/>

                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input type='password' placeholder="Password" id = "password" minLength = {6} required/>

                    <Form.Button disabled> Enviar</Form.Button> 

                    <Form.Link href='#'>Criar conta</Form.Link>
            </Form>
        </Container>

    )
}
export default Login