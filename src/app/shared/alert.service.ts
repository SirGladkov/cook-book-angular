import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(private dialog: MatDialog) {}

  show(message: string) {
    return this.dialog.open(AlertComponent, { data: message }).afterClosed();
  }
}