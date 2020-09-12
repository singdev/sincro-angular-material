import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';

@Component({
  selector: 'app-tm',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomMenuComponent);
  }

  ngOnInit(): void {
  }

}
