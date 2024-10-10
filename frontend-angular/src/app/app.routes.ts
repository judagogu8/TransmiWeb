import { Routes } from '@angular/router';
import {HIndexComponent} from './home/h-index/h-index.component';
import {HLoginComponent} from './home/h-login/h-login.component';
import {HRegistrarseComponent} from './home/h-registrarse/h-registrarse.component';
import {ErrorComponent} from './error/error.component';
import {RMenuComponent} from './ruta/r-menu/r-menu.component';
import {HSelectFunctionComponent} from './home/h-select-function/h-select-function.component';
import {REditarRutaComponent} from './ruta/r-editar-ruta/r-editar-ruta.component';
import { CGestionConductoresComponent } from './conductor/c-gestion-conductores/c-gestion-conductores.component';
import { CEditarConductorComponent } from './conductor/c-editar-conductor/c-editar-conductor.component';
import { CCrearConductorComponent } from './conductor/c-crear-conductor/c-crear-conductor.component';
import { CMenuComponent } from './conductor/c-menu/c-menu.component';
import { CEditarBusesComponent } from './conductor/c-editar-buses/c-editar-buses.component';
import { BMenuComponent } from './bus/b-menu/b-menu.component';
import { BModuloAgregarBusComponent } from './bus/b-modulo-agregar-bus/b-modulo-agregar-bus.component';

export const routes: Routes = [
  { path: '', component: HIndexComponent },
  { path: 'h-login', component: HLoginComponent },
  { path: 'h-register', component: HRegistrarseComponent },
  { path: 'r-menu', component: RMenuComponent },
  { path: 'h-select-function', component: HSelectFunctionComponent },
  {path:  'r-editar-ruta', component: REditarRutaComponent},
  {path: 'c-gestion-conductores', component: CGestionConductoresComponent},
  {path: 'c-editar-conductor', component: CEditarConductorComponent},
  {path: 'c-crear-conductor', component: CCrearConductorComponent},
  {path: 'c-editar-buses', component: CEditarBusesComponent},
  {path: 'c-menu', component: CMenuComponent},
  { path: 'b-menu', component: BMenuComponent },
  { path: 'b-agregar-bus', component: BModuloAgregarBusComponent },

  { path: '**', component: ErrorComponent }
];
