import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menu : Link[] = [
    new Link('Démonstrations', undefined, true, 
      new Link('Démonstration 01', '/demonstration/demo01'),
      new Link('Démonstration 02', undefined, false, 
        new Link('Product page', undefined, false,
          new Link('Details', '/demonstration/demo02product/details'),
          new Link('Edit', '/demonstration/demo02product/edit'),
        ),
        new Link('Stock page','/demonstration/demo02stock')
      ),
      new Link('Démonstration 03', '/demonstration/demo03'),
      new Link('Démonstration 04', '/demonstration/demo04'),
      new Link('Démonstration 05', '/demonstration/demo05'),
      new Link('Démonstration 06', '/demonstration/demo06'),
      new Link('Démonstration 07', '/demonstration/demo07'),
      new Link('Input/Output', '/demonstration/demo08'),
      new Link('Service', '/demonstration/demo08service'),
      new Link('Formulaire', '/demonstration/demo09'),
    ),
    new Link('Exercice', undefined, true,
      new Link('Exercice 01', '/exercice/exo01'),
      new Link('Exercice 02', '/exercice/exo02'),
      new Link('Exercice 03 ShoppingList','/exercice/exo03'),
      new Link('Exercice 04 ShoppingList++','/exercice/exo04'),
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
