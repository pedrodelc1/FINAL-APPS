import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Perfil } from '../app/interfaces/perfil';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  authService = inject(AuthService);
  private readonly API_USERS_URL = 'https://w370351.ferozo.com/api/Users';

  async getUsersbyId(id: number): Promise<Perfil | undefined> {
    try {
      const res = await fetch(`${this.API_USERS_URL}/${id}`, {
        headers: {
          Authorization: 'Bearer ' + (this.authService.token ?? ''),
        },
      });

      if (!res.ok) return undefined;
      return (await res.json()) as Perfil;
    } catch (error) {
      console.error('Error obteniendo usuario:', error);
      return undefined;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      const res = await fetch(`${this.API_USERS_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + (this.authService.token ?? ''),
        },
      });

      return res.ok;
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      return false;
    }
  }
}