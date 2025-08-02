import { Component, OnInit, Injector } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from '../../shared/models/recipe.models';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  form: FormGroup;
  units: Unit[] = ['шт', 'г', 'кг', 'мл', 'л', 'ч.л.', 'ст.л.'];
  id?: string;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private injector: Injector
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [''],
      ingredients: this.fb.array([])
    });
  }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id') || undefined;
  if (this.id) {
    this.recipeService.get(this.id).subscribe(recipe => {
      if (!recipe) return;

      this.form.patchValue({
        title: recipe.title,
        description: recipe.description,
        imageUrl: recipe.imageUrl
      });

      this.ingredients.clear();

      recipe.ingredients.forEach((ing: any) =>
        this.ingredients.push(
          this.fb.group({
            name: [ing.name, Validators.required],
            quantity: [ing.quantity, [Validators.required, Validators.min(1)]],
            unit: [ing.unit, Validators.required]
          })
        )
      );
    });
  }
}
  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
        unit: ['г', Validators.required]
      })
    );
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  save(): void {
  if (this.form.invalid || this.ingredients.length === 0) {
    const alert = this.injector.get(AlertService);
    alert.show('Заполните название, описание и добавьте хотя бы один ингредиент.');
    return;
  }

  const raw = this.form.value;
  const obs = this.id
    ? this.recipeService.update(this.id, raw)
    : this.recipeService.add(raw);

  obs.then(() => this.router.navigate(['/']));
}

  async upload(event: Event): Promise<void> {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  try {
    const url = await this.recipeService.uploadImage(file);
    this.form.patchValue({ imageUrl: url });
  } catch (err) {
    console.error('Upload failed', err);
  }
}
}