import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Configuracion } from './pages/configuration/configuration';

export const routes: Routes = [
    
    {
        path: "Login",
        component: Login
    },
    {
        path: "Registro",
        component: Register
    },
    {
        path: "Perfil",
        component: Perfil
    },
    {
        path: "Configuracion",
        component: Configuracion
    },
    {
        path: "**",
        component: Home
    },
];