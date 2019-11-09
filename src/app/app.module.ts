import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import {FormsModule} from "@angular/forms";
import { HoverizerDirective } from './derectives/hoverizer.directive';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { CreateHouseComponent } from './components/create-house-component/create-house.component';
import { ShowFullInfoHouseComponentComponent } from './components/show-full-info-house-component/show-full-info-house-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    HoverizerDirective,
    RegisterComponentComponent,
    LoginComponentComponent,
    CreateHouseComponent,
    ShowFullInfoHouseComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
