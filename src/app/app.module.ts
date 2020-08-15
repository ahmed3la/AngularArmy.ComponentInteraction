import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './AppComponant';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { from } from 'rxjs';

// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
