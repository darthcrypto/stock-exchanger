import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatExpansionModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { BerkshireComponent } from './stocks/berkshire/berkshire.component';
import { AmazonComponent } from './stocks/amazon/amazon.component';
import { JohnsonComponent } from './stocks/johnson/johnson.component';
import { MastercardComponent } from './stocks/mastercard/mastercard.component';
import { MicrosoftComponent } from './stocks/microsoft/microsoft.component';
import { NvidiaComponent } from './stocks/nvidia/nvidia.component';
import { VisaComponent } from './stocks/visa/visa.component';
import { VooComponent } from './stocks/voo/voo.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    BerkshireComponent, 
    AmazonComponent, 
    JohnsonComponent, 
    MastercardComponent,
    MicrosoftComponent,
    NvidiaComponent,
    VisaComponent,
    VooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
