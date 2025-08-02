import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../shared/models/recipe.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe$!: Observable<Recipe | undefined>;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recipe$ = this.recipeService.get(id);
  }
}
