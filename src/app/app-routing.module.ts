import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path:'',pathMatch:'full' ,redirectTo:'home'},
  {path:'home' ,component:HomeComponent},
  {path:'features' ,component:FeaturesComponent},
  {path:'aboutus' ,component:AboutusComponent},
  {path:'classes' ,component:ClassesComponent},
  {path:'gallery' ,component:GalleryComponent},
  {path:'schedule' ,component:ScheduleComponent},
  {path:'contactus' ,component:ContactusComponent},
  {path:'**' ,component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
