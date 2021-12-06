import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePipe } from './pipes/welcome.pipe';
import { CardComponent } from './components/card/card.component';
import { ImgThumbComponent } from './components/img-thumb/img-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    CardComponent,
    ImgThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
