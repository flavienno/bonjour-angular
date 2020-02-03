import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bonjour-avec-prenom',
  templateUrl: './bonjour-avec-prenom.component.html',
  styleUrls: ['./bonjour-avec-prenom.component.css']
})

export class BonjourAvecPrenomComponent implements OnInit {

  @Input() prenom:string; // déclarer que ce champ est un paramètre du composant

  constructor() { 
    

  }

  ngOnInit() {
  }

}
