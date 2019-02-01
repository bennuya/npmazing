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
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ShowFeedbackComponent } from './components/show-feedback/show-feedback.component';
import { PackageNotFoundComponent } from './components/package-not-found/package-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'package', component: PackageComponent },
  { path: 'package/:search', component: PackageComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'all-feedbacks/:id', component: ShowFeedbackComponent },
  { path: '**', component: PackageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackageComponent,
    FilterPipe,
    LoaderComponent,
    FeedbackComponent,
    ShowFeedbackComponent,
    PackageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
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
