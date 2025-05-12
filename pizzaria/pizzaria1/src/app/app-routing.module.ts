import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToPrincipal = () => redirectLoggedInTo(['principal']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectLoggedInToPrincipal)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pizza1',
    loadChildren: () => import('./pizza1/pizza1.module').then( m => m.Pizza1PageModule)
  },
  {
    path: 'pizza2',
    loadChildren: () => import('./pizza2/pizza2.module').then( m => m.Pizza2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToPrincipal)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'salgadas',
    loadChildren: () => import('./salgadas/salgadas.module').then( m => m.SalgadasPageModule)
  },
  {
    path: 'doces',
    loadChildren: () => import('./doces/doces.module').then( m => m.DocesPageModule)
  },
  {
    path: 'pizza3',
    loadChildren: () => import('./pizza3/pizza3.module').then( m => m.Pizza3PageModule)
  },
  {
    path: 'pizza4',
    loadChildren: () => import('./pizza4/pizza4.module').then( m => m.Pizza4PageModule)
  },
  {
    path: 'pizza5',
    loadChildren: () => import('./pizza5/pizza5.module').then( m => m.Pizza5PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
