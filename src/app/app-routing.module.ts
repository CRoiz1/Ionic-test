import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';  // Importa UserListComponent

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'users',
    component: UserListComponent  // Define la ruta para UserListComponent
  },
  {
    path: '',
    redirectTo: 'users',  // Redirige a 'users' en lugar de 'home'
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
