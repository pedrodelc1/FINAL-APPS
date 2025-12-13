
export interface Producto {
    id: number,
    nombre: string,
    precio: number,
    isDestacado: boolean,
    Descuento: number,
    isHappyHour: boolean, 
    ingredientes: Producto[],
    fotoUrl: string,
}
export type NewProduct = Omit<Producto, "id">;