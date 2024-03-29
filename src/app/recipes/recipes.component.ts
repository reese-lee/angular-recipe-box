import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-recipes', //This is where the info is going to display
  templateUrl: './recipes.component.html', //This is the page the info is going to display on
  styleUrls: ['./recipes.component.css'] //This is where it will be getting its styling
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagna', ['cheese', 'some meats', 'some sauce'], ['put them all together in a blender', 'turn on the blender, and enjoy'], 3)
  ]

  selectedRecipe: Recipe = this.recipes[0];

  priorityColor(recipe) {
    if(recipe.priority === 3) {
      return "bg-danger";
    } else if (recipe.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
  editDescription() {
    alert("Time to edit this recipe!");
  }
  constructor() { }

  ngOnInit() {

  }

}
