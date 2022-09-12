
import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
    canLoad:[LoginGuard],
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./home/dashboard/dashboard/dashboard.module').then((m)=>m.DashboardModule),
    canLoad:[AutenticacaoGuard],
  },
  {
    path:'carros',
    loadChildren: ()=>import ('./carros/carros.module').then((m)=>m.CarrosModule),
    canLoad:[AutenticacaoGuard],
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
