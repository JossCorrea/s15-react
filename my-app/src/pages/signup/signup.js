import React from 'react';
import Form from '../../components/form';
import Container from '../../components/container';

function Signup(){   
    return(
        <Container>
            <Form>
                <Form.Label htmlFor='nome'>Nome:</Form.Label>
                <Form.Input type='text' placeholder="Nome" id = "nome"/>

                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Input type='email' placeholder="Email" id = "email"/>
            
                <Form.Label htmlFor='telefone'>Telefone:</Form.Label>
                <Form.Input type='tel' placeholder="Telefone" id = "telefone"/>

                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input type='password' placeholder="Senha" id = "password"/>

                <Form.Button disabled> Enviar</Form.Button> 

                <Form.Link href='#'>Fazer login</Form.Link>
            </Form>
        </Container>
    )
}
export default Signup