import { Component, OnInit, } from '@angular/core';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-character-table-main',
  templateUrl: './character-table-main.component.html',
  styleUrls: ['./character-table-main.component.scss']
})

export class CharacterTableMainComponent implements OnInit {
  events$

  constructor(public tableDataServ: TableDataService ) {
    this.events$ = tableDataServ.events$
  }

  ngOnInit(): void {
  }

  addEvent(i:number = 1) {
    this.tableDataServ.createTempEvent(i)
  }

  saveAll(){
    this.tableDataServ.updateAllEvents()
  }

}

