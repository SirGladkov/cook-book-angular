import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfirmComponent } from './mat-dialog-confirm/mat-dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private dialog: MatDialog) {}

  ask(title: string) {
    return this.dialog
               .open(MatDialogConfirmComponent, { data: title })
               .afterClosed();
  }
}