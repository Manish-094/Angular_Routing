import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGaurdService } from './services/gaurds/auth-gaurd.service';
import { DeactivateGaurdService } from './services/gaurds/deactivate-gaurd.service';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
 {path:'about', component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'user',
 component:UsersComponent,
//  canActivate:[AuthGaurdService]   //parent based authentication     
canActivateChild:[AuthGaurdService],
children:[
  {path:':id/:name',component:UsersComponent},
  {path:':id/:name/:edit',
  component:EditUserComponent,
  canDeactivate:[DeactivateGaurdService]
}
]   
},

  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
