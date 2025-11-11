import { Routes } from '@angular/router';
import { Articulo } from './pages/articulo/articulo';
import { Carrito } from './pages/carrito/carrito';
import { Rubro } from './pages/rubro/rubro';
import { Buscar } from './pages/buscar/buscar';
import { Home } from './pages/home/home';
import { Perfil } from './pages/perfil/perfil';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "Carrito",
        component: Carrito
    },
    {
        path: "Articulo",
        component: Articulo
    },
    {
        path: "Rubro",
        component: Rubro
    },
    {
        path: "Buscar",
        component: Buscar
    },
    {
        path: "Perfil",
        component: Perfil
    }
];