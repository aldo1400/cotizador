import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import Plans from 'pages/Plans';
import Congratulation from 'pages/Congratulation';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/registrarse',
        component: Register
    },
    {
        path: '/perfil',
        component: Profile
    },
    {
        path: '/planes',
        component: Plans
    },
    {
        path: '/gracias',
        component: Congratulation
    },
];

export default routes;