import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LikeComponent } from './components/like/like.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [

  { path: '',   component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'like', component: LikeComponent },
  { path: 'video_presentation', component: PresentationComponent },

];



 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
