import React from 'react';
import Form from '../../components/form';

function Signup(){   
    return(
        <Form>
            <Form.Label htmlFor='nome'>Nome:</Form.Label>
            <Form.Input type='text' placeholder="Nome" id = "nome"/>

            <Form.Label htmlFor='email'>Email:</Form.Label>
            <Form.Input type='text' placeholder="Email" id = "email"/>
           
            <Form.Label htmlFor='telefone'>Telefone:</Form.Label>
            <Form.Input type='text' placeholder="Telefone" id = "telefone"/>

            <Form.Label htmlFor='password'>Senha:</Form.Label>
            <Form.Input type='password' placeholder="Senha" id = "password"/>

            <Form.Button disabled> Enviar</Form.Button> 

            <Form.Link href='#'>Fazer login</Form.Link>
        </Form>
    )
}
export default Signup