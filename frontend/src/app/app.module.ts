import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PackageComponent } from './components/package/package.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LoaderComponent } from './components/loader/loader.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'package', component: PackageComponent },
  { path: 'package/:search', component: PackageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackageComponent,
    FilterPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    FilterPipe,
  ],
  entryComponents: [
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
