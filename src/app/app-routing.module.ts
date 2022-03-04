import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from './components/four-ofour/four-ofour.component';
import { Sample01Component } from './components/sample01/sample01.component';
import { Demo01Component } from './demo/components/demo01/demo01.component';

const routes: Routes = [
  {path:'', redirectTo:'demonstration',pathMatch:'full'},
  {path:'sample01', component:Sample01Component},
  {path:'toto', component:Sample01Component},
  {path:'demonstration', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path:'exercice', loadChildren: () => import('./exercice/exercice.module').then(m => m.ExerciceModule)},
  {path:'error', component : FourOfourComponent},
  {path : '**', redirectTo: 'error', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
