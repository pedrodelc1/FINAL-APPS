import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

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
        path: "**",
        component: Home
    },
];