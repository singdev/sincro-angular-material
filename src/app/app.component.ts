import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sincro-responsive';
  mode = new FormControl('over');
  isSearch: boolean = false;
  hide: boolean = false;

  currentView = 1;

  select(index:number){
    this.currentView = index;
  }
}
