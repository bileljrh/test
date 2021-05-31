import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { EditpostComponent } from './components/post/editpost/editpost.component';


const appRoutes: Routes = [
  { path: '', component:PostComponent  },
  { path: 'editpost/:id', component: EditpostComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
