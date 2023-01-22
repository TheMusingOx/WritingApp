import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterTableMainComponent } from './character-table-main/character-table-main.component';
import { DetailCellComponent } from './detail-cell/detail-cell.component';
import { EventCellComponent } from './event-cell/event-cell.component';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    CharacterTableMainComponent,
    DetailCellComponent,
    EventCellComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragulaModule,
  ]
})
export class TableStatesModule { }
