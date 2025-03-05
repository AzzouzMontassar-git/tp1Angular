import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResidencesComponent } from './components/residences/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './components/apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './components/not-found/not-found.component'; // Ajout du composant NotFound

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers /home
  { path: 'home', component: HomeComponent }, // Page d'accueil
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent }, // Détails avec paramètre ID
  { path: 'residences/:id/add-residence', component: AddResidenceComponent }, // Ajout d'une résidence avec ID
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/add', component: AddApartmentComponent }, // Ajout d'un appartement
  { path: 'apartments/:residenceId', component: ApartmentsByResidenceComponent }, // Appartements par résidence
  { path: '**', component: NotFoundComponent } // Gestion des routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
