import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingComponent } from '../Components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class MainControllerService {
  loadingDialogRef: MatDialogRef<LoadingComponent, any>;
  constructor(private dialog: MatDialog) { }

  openLoadingDialog(): void {
    this.loadingDialogRef = this.dialog.open(LoadingComponent, {
      width: '250px',
    });
  }

  closeLoadingDialog(): void {
    this.loadingDialogRef.close();
  }
}
