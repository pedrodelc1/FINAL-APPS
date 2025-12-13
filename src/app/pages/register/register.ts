import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  errorRegister=false;
  authService= inject(AuthService); //cambiar por auth service
  isLoading = false;
  router = inject(Router);


  async register(form: NgForm) {
    this.errorRegister = false;
   
    // Validaciones
    if (!form.value.restaurantName || !form.value.password ||
        !form.value.password2 || !form.value.firstName ||
        !form.value.lastName || !form.value.address ||
        !form.value.phoneNumber ||
        form.value.password !== form.value.password2) {
      this.errorRegister = true;
      return;
    }


    this.isLoading = true; // 🟢 Prende spinner


    try {
      // Intentamos llamar al servicio
      //  Asumimo que tu servicio devuelve 'true' si salió bien o el objeto Response
      const res = await this.authService.register(form.value);


      // Verificamos si salió bien (Adaptado a si devuelves boolean o Response)
      if (res) {
        this.router.navigate(["/Login"]);
      } else {
        this.errorRegister = true;
      }


    } catch (error) {
      // Si algo explota (ej: servidor caído, sin internet), cae aquí
      console.error("Error en el registro:", error);
      this.errorRegister = true;
    } finally {
      //  ESTO ES LO QUE FALTABA
      // Se ejecuta SIEMPRE, haya error o no via éxito.
      this.isLoading = false;
    }
  }

}
