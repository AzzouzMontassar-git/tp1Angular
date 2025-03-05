import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importer FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './components/residences/residences/residences.component';
import { ResidenceDetailsComponent } from './components/residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './components/residences/add-residence/add-residence.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApartmentsComponent } from './components/apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './components/apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ApartmentsComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Ajouter FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
