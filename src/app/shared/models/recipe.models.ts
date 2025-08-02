import { Timestamp } from '@angular/fire/firestore';

export interface Recipe {
  id?: string;                         // Firestore id
  title: string;
  description: string;
  imageUrl?: string;
  ingredients: Ingredient[];
  createdAt: Timestamp;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: Unit;
}

export type Unit = 'шт' | 'г' | 'кг' | 'мл' | 'л' | 'ч.л.' | 'ст.л.';