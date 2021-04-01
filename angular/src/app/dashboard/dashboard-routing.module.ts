import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CanExitGuardService } from "./services/can-exit-guard.service";
import { HomeGuardService } from "./services/home-guard.service";
import { ProfileResolveService } from "./services/profile-resolve.service";

const routes: Routes = [        
    {
      path: 'home', component:  HomeComponent, 
      canActivate: [HomeGuardService], 
      canDeactivate: [CanExitGuardService],
      resolve: {
        userProfile: ProfileResolveService
      } 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }