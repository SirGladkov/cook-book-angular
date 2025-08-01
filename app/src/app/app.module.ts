import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { MatDialogConfirmComponent } from './shared/mat-dialog-confirm/mat-dialog-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    MatDialogConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
