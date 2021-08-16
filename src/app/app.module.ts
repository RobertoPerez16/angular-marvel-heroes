// ANGULAR MODULES //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// COMPONENTS //
import { AppComponent } from './components/main-app/app.component';
import { NabvarComponentComponent } from './components/nabvar/nabvar-component.component';
import { FooterComponentComponent } from './components/footer/footer-component.component';
import { CharacterContentComponent } from './pages/character-content/character-content.component';
import { ContentDescriptionComponent } from './components/content-description/content-description.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { ComicsContentComponent } from './pages/comics-content/comics-content.component';

// SERVICES //
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './services/hero.service';

// PAGINATION //
import { NgxPaginationModule } from 'ngx-pagination';

// STORES //
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/pagination.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponentComponent,
    FooterComponentComponent,
    CharacterContentComponent,
    ContentDescriptionComponent,
    CharacterDetailComponent,
    SpinnerComponent,
    HomeComponent,
    ComicsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({paginationReducer: reducer}),
    FormsModule,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
