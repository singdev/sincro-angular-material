import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongPressDirective } from './directives/long-press.directive';
import { PetComponent } from './pet/pet.component';
import { TmComponent } from './tm/tm.component';
import { WidgetComponent } from './widget/widget.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    PetComponent,
    TmComponent,
    LongPressDirective,
    BottomMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    ClipboardModule,
    MatCardModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
