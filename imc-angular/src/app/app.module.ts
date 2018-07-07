import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';
import { ImcService } from './imc/imc.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImcComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ImcService ]
})
export class AppModule { }
