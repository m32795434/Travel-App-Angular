import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//improtamos las paginas
import {ContactoComponent} from './pages/contacto/contacto.component';
import {HomeComponent} from './pages/home/home.component';
import {NosotrosComponent} from './pages/nosotros/nosotros.component';
//declaramos rutas
const routes: Routes = [
  //home va primero
  { path: '', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'nosotros', component: NosotrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
