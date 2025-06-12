import { Routes } from '@angular/router';
import { ProveedoresPage } from './pages/proveedores/proveedores.page';
import { InstitucionesPage } from './pages/instituciones/instituciones.page';
import { VersionesPage } from './pages/versiones/versiones.page';
import { CambiosAplicadosPage } from './pages/cambios-aplicados/cambios-aplicados.page';
import { DetallePage } from './pages/detalle/detalle.page';

export const routes: Routes = [
  { path: 'proveedores', component: ProveedoresPage },
  { path: 'instituciones', component: InstitucionesPage },
  { path: 'versiones', component: VersionesPage },
  { path: 'cambios-aplicados', component: CambiosAplicadosPage },
  { path: 'detalle', component: DetallePage },
  { path: '', redirectTo: 'proveedores', pathMatch: 'full' }
];