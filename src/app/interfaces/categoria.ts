import {Producto} from "./productos.js"

export interface Categoria {
    id: number,
    nombre: string,
    fotoUrl: string,
    productos: Producto[]
}