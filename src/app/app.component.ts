import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rassssipees';

  currentRecipe: string = 'Rasssipis';
  recipes: Recipe[] = [
    new Recipe('Lasagna', ['cheese', 'some meats', 'some sauce'], ['put them all together in a blender', 'turn on the blender, and enjoy'])
  ]
}
