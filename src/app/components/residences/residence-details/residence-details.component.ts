import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { ResidencesComponent } from '../residences/residences.component'; 

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private residencesComponent: ResidencesComponent // Injecter le composant de résidences pour récupérer la liste
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID depuis l'URL
    this.loadResidence(id); // Charger la résidence en fonction de l'ID
  }

  // Charger les données de la résidence
  loadResidence(id: number): void {
    this.residence = this.residencesComponent.listResidences.find(residence => residence.id === id)!;
    console.log('Résidence chargée:', this.residence); // Ajoutez ce log pour vérifier la résidence
  }

  // Aller à la résidence suivante
  goToNextResidence(): void {
    const nextResidenceId = this.residence.id + 1;
    const nextResidence = this.residencesComponent.listResidences.find(res => res.id === nextResidenceId);
    if (nextResidence) {
      this.router.navigate([`/residences/${nextResidence.id}`]);
    } else {
      alert("Aucune résidence suivante.");
    }
  }
}
