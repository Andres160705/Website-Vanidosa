import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CitasComponent } from './citas/citas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'citas', component: CitasComponent },
];
