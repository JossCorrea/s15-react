import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Alert from './alert';
// import Input from './components/form/input';
// import Label from './components/form/label';
// import Link from './components/form/link'; 
import Form from './components/form'; 
// import Button from './components/form/button'; Pode sair porque vc já inseriu o vinculo dentro do form
import * as serviceWorker from './serviceWorker';

const component = 
<Form title = 'Login' text = "Entre com o seu email e senha" >
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Input type='text' placeholder="Email" id = "email"/>

        <Form.Label htmlFor='password'>Senha:</Form.Label>
        <Form.Input type='password' placeholder="Password" id = "password"/>

        <Form.Button disabled> Enviar</Form.Button> 

        <Form.Link href='#'>Criar conta</Form.Link>
</Form>

// Nota do button: Não precisa passar o parametro, qnd vc coloca disable ele entende disable =true, do contrario, se nçao colocar nada é falso


// ReactDOM.render(<Alert cor='green'>Hello React, vem ni mim que eu to facim</Alert>, document.getElementById('root'));
ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
