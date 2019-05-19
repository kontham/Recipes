import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name', 'Recipe description', 'https://ischool.sjsu.edu/sites/main/files/main-images/camera_lense_0.jpeg'),
    new Recipe('Recipe Nmae', 'Recipe description', 'https://ischool.sjsu.edu/sites/main/files/main-images/camera_lense_0.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
