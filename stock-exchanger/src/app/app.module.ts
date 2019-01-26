import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

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
    VooComponent,
    BookDetailComponent,
    BookComponent,
    BookCreateComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
