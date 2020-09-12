import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  value: string= `
      Bienvenue chez bonus,
  `;

  longPressing = 0;
  isLongPressed = false;

  constructor(private clipboard: Clipboard, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
  }


  copyValue(){
    this.clipboard.copy(this.value);
  }

  onLongPress() {
    this.longPressing = null;
    console.log("Copy value");
    this.copyValue();
    this.snackbar.open('Copié', '', {
      duration: 3000
    });
    this.isLongPressed = !this.isLongPressed;
  }

  onLongPressing() {
    this.longPressing += 1;
  }
}
