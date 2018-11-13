import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Alert from './alert';
// import Input from './components/form/input';
// import Label from './components/form/label';
// import Link from './components/form/link'; 
import Login from './pages/login'; 
import Signup from './pages/signup'; 
// import Button from './components/form/button'; Pode sair porque vc já inseriu o vinculo dentro do form
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
