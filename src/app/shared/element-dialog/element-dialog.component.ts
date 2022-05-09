import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Task} from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {

  element!: Task;

  constructor(
    // Injetando o valor dentro do modal
    @Inject(MAT_DIALOG_DATA) 
    public data: Task,  // PeriodicElement -> Task
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
