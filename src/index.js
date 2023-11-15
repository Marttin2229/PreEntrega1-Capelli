// 1) Importamos las librerias React y React DOM

import React from "react";
//La libreria que define que es un componente y como los componentes funcionan juntos

import ReactDOM from "react-dom/client";
// La libreria que sabe como hacer un componente aparezca en la pantalla del usuario
import App from "./App";

// 2) Obtener una referencia al div con id ROOT
const el = document.getElementById("root");

// 3) Le decimos a React que tome control del elemento 
const root = ReactDOM.createRoot(el);

// 4) Creamos un componente 
//* function App(){
//    let mensaje = "Hola buenas noches a todos"

    // Utilizamos {} para imprimir variables
   // return <h1>{mensaje}</h1>
// }


// 5) Mostrar el componente en la pantalla del usuario 
root.render(<App/>)
