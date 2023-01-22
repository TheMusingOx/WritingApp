import { Component, OnInit, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { cellStatus, storyEvent } from 'src/app/data/char-tables'

@Component({
  selector: 'app-event-cell',
  templateUrl: './event-cell.component.html',
  styleUrls: ['./event-cell.component.scss']
})

export class EventCellComponent implements OnInit {

  @Input() cellNum: number = 0;

  editBtn: string = '<->';

  e: storyEvent = {
    ID: '',
    storyID: 'temp',
    name: 'New Event',
    desc: 'What happened?',
    beingEdited: false,
    status: cellStatus.new,
    storyTime: '',
    storyOrder: 0,
    presentOrder: 0,
  }

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.e = this.tableDataService.getEvent(this.cellNum)
    this.btnSet();
  }

  checkStatus(): any {
    switch (this.e.status){
      case cellStatus.edited:
        return 'edited'
      case cellStatus.deleted:
        return 'deleted'
      case cellStatus.new:
        return 'new'
      default:
      case cellStatus.saved:
        return null
    }
  }

  toggleEditMode() {
    this.e.beingEdited = !this.e.beingEdited;
    this.btnSet()
  }

  // Not working
  setStatus() {
    this.e.status == cellStatus.new ? null : this.e.status = cellStatus.edited;
  }

  btnSet(){
    this.e.beingEdited ? this.editBtn = '>.<' : this.editBtn = '<.>';
  }

}

