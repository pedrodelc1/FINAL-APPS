
export interface Producto {
    id: number,
    nombre: string,
    precio: number,
    esVegano: boolean,
    esCeliaco: boolean,
    ingredientes: Producto[],
    fotoUrl: string,
}