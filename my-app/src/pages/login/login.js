import React from 'react';
import Form from '../../components/form';

function Login(){   
    return(
        <Form title = 'Login' text = "Entre com o seu email e senha" >

                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Input type='text' placeholder="Email" id = "email"/>

                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input type='password' placeholder="Password" id = "password"/>

                <Form.Button disabled> Enviar</Form.Button> 

                <Form.Link href='#'>Criar conta</Form.Link>
        </Form>
    )
}
export default Login