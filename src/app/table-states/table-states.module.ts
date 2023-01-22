import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterTableMainComponent } from './character-table-main/character-table-main.component';
import { NgxRepeatTimesModule } from 'ngx-repeat-times';
import { DetailCellComponent } from './detail-cell/detail-cell.component';
import { EventCellComponent } from './event-cell/event-cell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterTableMainComponent,
    DetailCellComponent,
    EventCellComponent,
  ],
  imports: [
    CommonModule,
    NgxRepeatTimesModule,
    FormsModule,
  ]
})
export class TableStatesModule { }
