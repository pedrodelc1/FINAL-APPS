import { Injectable } from '@angular/core';
import { Producto } from '../../interfaces/productos';
import { Categoria } from '../../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  async getByCategoria(id:number):Promise<Producto[]>{
    const res =  await fetch("/Data/database.json")
    const resJson:Categoria[] = await res.json()
    const productos = resJson.find(categoria => categoria.id === id)?.productos;
    if(productos) return productos;
    return [];
  }
}
