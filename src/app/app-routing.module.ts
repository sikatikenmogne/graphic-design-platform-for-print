import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {HomeUserComponent} from "./Pages/home-user/home-user.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";
import {TutorielsComponent} from "./Pages/tutoriels/tutoriels.component";
import {UtilisateursComponent} from "./Pages/utilisateurs/utilisateurs.component";
import {ConnexionComponent} from "./Pages/connexion/connexion.component";
import {InscriptionComponent} from "./Pages/inscription/inscription.component";
import {SidebarComponent} from "./Pages/sidebar/sidebar.component";
import {ModeleComponent} from "./Pages/modele/modele.component";
import {DesignerComponent} from "./Pages/designer/designer.component";
import {DetailComponent} from "./Pages/detail/detail.component";
import {UpdateUtilisateurComponent} from "./Pages/utilisateurs/update-utilisateur/update-utilisateur.component";
import {DetailsUtilisateurComponent} from "./Pages/utilisateurs/details-utilisateur/details-utilisateur.component";
import {UserGuard} from "./Guard/user.guard";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeUserComponent
  },
  {
    path:'login',
    component:ConnexionComponent
  },
  {
    path:'side',
    component:SidebarComponent,
    children:[
      {
        path: 'tutoriel',
        component: TutorielsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path:'register',
        component:InscriptionComponent
      },
      {
        path: 'modele',
        component: ModeleComponent
      },
      {
        path: 'meme',
        component: DesignerComponent
      },
      {
        path: 'meme/:id',
        component: DetailComponent
      },
      {
        path: 'users',
        component: UtilisateursComponent
      },
      {
        path: 'updateUser/:id',
        component: UpdateUtilisateurComponent
      },
      {
        path: 'detailsUser/:id',
        component: DetailsUtilisateurComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
