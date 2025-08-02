import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ConfirmService } from '../../shared/confirm.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes$ = this.recipeService.all();

  constructor(
    private recipeService: RecipeService,
    private confirmService: ConfirmService
  ) {}

  delete(id: string): void {
  this.confirmService.ask('Удалить рецепт?').subscribe(ok => {
    if (!ok) return;

    this.recipeService.remove(id).then(() => {
      this.recipes$ = this.recipeService.all();
    });
  });
}
}