import { Routes } from '@angular/router';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { VersionesComponent } from './pages/versiones/versiones.component';
import { CambiosAplicadosComponent } from './pages/cambios-aplicados/cambios-aplicados.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'instituciones', component: InstitucionesComponent },
  { path: 'versiones', component: VersionesComponent },
  { path: 'cambios-aplicados', component: CambiosAplicadosComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: '', redirectTo: 'proveedores', pathMatch: 'full' }
];