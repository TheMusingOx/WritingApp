import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail-cell',
  templateUrl: './detail-cell.component.html',
  styleUrls: ['./detail-cell.component.scss']
})
export class DetailCellComponent implements OnInit {

  @Input() cellNum: number[] = [0,0]

  constructor() { }

  ngOnInit(): void {
    this.getCellDetails(this.cellNum)
  }

  OnChanges(): void {
    this.getCellDetails(this.cellNum)
  }

  getCellDetails([]) {

  }

}
