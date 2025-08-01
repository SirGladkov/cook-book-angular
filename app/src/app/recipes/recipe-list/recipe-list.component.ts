import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  
  recipes$ = this.recipeService.all();

  constructor(private recipeService: RecipeService) {}
}
