import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './races/races.component';
import { MagicComponent } from './magic/magic.component';
import { LocationsComponent } from './locations/locations.component';
import { SocietiesComponent } from './societies/societies.component';

@NgModule({
  declarations: [
    RacesComponent,
    MagicComponent,
    LocationsComponent,
    SocietiesComponent
  ],
  imports: [
    CommonModule
  ]
})

export class WorldbuildingModule { }

