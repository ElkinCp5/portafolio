import React from "react";
import { Home, Studies, Experience } from "../views";

const Projects =()=> <React.Fragment>
    <h3>Projectos</h3>
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
        path: '/proyectos',
        name: 'Projectos',
        exact: true,
        component: Projects,
    },
    {
        path: '/contact',
        name: 'Contacto',
        exact: true,
        component: Contact,
    },
    {
        path: '/curriculum',
        name: 'Cv',
        exact: true,
        component: Cv,
    },
    {
        path: '*',
        component: E404,
    },
];