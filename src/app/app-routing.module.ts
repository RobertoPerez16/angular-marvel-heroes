import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterContentComponent } from './pages/character-content/character-content.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { ComicsContentComponent } from './pages/comics-content/comics-content.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'comics',
        component: ComicsContentComponent
    },
    {
        path: 'characters',
        component: CharacterContentComponent
    },
    {
        path: 'character-detail/:id',
        component: CharacterDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
