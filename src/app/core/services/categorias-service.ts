import { Injectable } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class categoriasService {

  async getAll():Promise<Categoria[]> {
    const res =  await fetch("/Data/database.json")
    const resJson = await res.json()
    return resJson;
  }
  
}
