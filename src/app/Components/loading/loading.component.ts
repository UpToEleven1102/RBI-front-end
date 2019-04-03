import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnChanges {
  @Input() loading: boolean;

  constructor(public dialogRef: MatDialogRef<LoadingComponent>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.loading.currentValue) {
      this.dialogRef.close();
    }
  }

  ngOnInit() {
  }

}
