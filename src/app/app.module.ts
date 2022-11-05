import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HomeUserComponent } from './Pages/home-user/home-user.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { TutorielsComponent } from './Pages/tutoriels/tutoriels.component';
import { UtilisateursComponent } from './Pages/utilisateurs/utilisateurs.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { DialogtutorielComponent } from './Pages/tutoriels/dialogtutoriel/dialogtutoriel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import { ModeleComponent } from './Pages/modele/modele.component';
import { DesignerComponent } from './Pages/designer/designer.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { UpdateUtilisateurComponent } from './Pages/utilisateurs/update-utilisateur/update-utilisateur.component';
import { DetailsUtilisateurComponent } from './Pages/utilisateurs/details-utilisateur/details-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeUserComponent,
    DashboardComponent,
    InscriptionComponent,
    TutorielsComponent,
    UtilisateursComponent,
    SidebarComponent,
    DialogtutorielComponent,
    ConnexionComponent,
    ModeleComponent,
    DesignerComponent,
    DetailComponent,
    UpdateUtilisateurComponent,
    DetailsUtilisateurComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
