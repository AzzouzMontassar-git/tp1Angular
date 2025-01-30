import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  // Liste des résidences
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible", isFavorite: false },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible", isFavorite: false },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu", isFavorite: false },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R3.jpg", status: "En Construction", isFavorite: false }
  ];

  // Liste des favoris
  favoriteResidences: Residence[] = [];

  // Recherche par adresse
  searchQuery: string = '';

  // Fonction pour filtrer les résidences
  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Fonction pour ajouter ou retirer une résidence des favoris
  toggleFavorite(residence: Residence) {
    if (residence.isFavorite) {
      // Retirer des favoris
      this.favoriteResidences = this.favoriteResidences.filter(r => r.id !== residence.id);
      residence.isFavorite = false;
    } else {
      // Ajouter aux favoris
      this.favoriteResidences.push(residence);
      residence.isFavorite = true;
    }
  }

  // Fonction pour afficher l'adresse de la résidence
  showLocation(address: string): void {
    if (address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue.");
    } else {
      alert("Adresse de la résidence : " + address);
    }
  }
}
