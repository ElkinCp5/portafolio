import React from "react";
import { Home } from "../views";

const Studies =()=> <React.Fragment>
    <h3>Studies</h3>
</React.Fragment>;

const Experience =()=> <React.Fragment>
    <h3>Experience</h3>
</React.Fragment>;

const Contact =()=> <React.Fragment>
    <h3>Contact</h3>
</React.Fragment>;

const Cv =()=> <React.Fragment>
    <h3>Cv</h3>
</React.Fragment>;

const E404 =()=> <React.Fragment>
<h1>Error 404</h1>
</React.Fragment>;


export const routes = [
    {
        path: '/',
        name: 'Inicio',
        exact: true, 
        component: Home,
    },
    {
        path: '/estudios',
        name: 'Estudios',
        exact: true,
        component: Studies,
    },
    {
        path: '/experiencia',
        name: 'Experiencia',
        exact: true,
        component: Experience,
    },
    {
        path: '/curriculum',
        name: 'Curriculum',
        exact: true,
        component: Cv,
    },
    {
        path: '/contacto',
        name: 'Contacto',
        exact: true,
        component: Contact,
    },
    {
        path: '*',
        component: E404,
    },
];