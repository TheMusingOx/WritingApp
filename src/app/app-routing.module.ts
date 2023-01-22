import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterHomeComponent } from './characters/character-home/character-home.component';
import { ManuscriptHomeComponent } from './manuscript/manuscript-home/manuscript-home.component';
import { CharacterTableMainComponent } from './table-states/character-table-main/character-table-main.component';

const routes: Routes = [
  { path: 'characters', component: CharacterHomeComponent },
  { path: 'manuscript', component: ManuscriptHomeComponent },
  { path: 'main-tables', component: CharacterTableMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
