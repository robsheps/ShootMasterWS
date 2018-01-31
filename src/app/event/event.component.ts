import { Component, OnInit, Input} from '@angular/core';

import {Event} from "./event.model";
import {EventService} from "./event.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[];
  public row: number = -1;
  public obj = {} as Event;
  @Input() numberOfTargets: number;
  @Input() event: string;
  @Input() costFullNoms: number;
  @Input() costReducedNoms: number;
  @Input() optionalGradedPool: number;
  @Input() optionalOverallPool: number;
  @Input() optionalHighScorePool: number;
  @Input() possibleScore: number;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.getEvents()
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }


  newRow(){

    // create obj from table
    this.obj.numberOfTargets = this.numberOfTargets;
    this.obj.event = this.event;
    this.obj.costFullNoms = this.costFullNoms;
    this.obj.costReducedNoms = this.costReducedNoms;
    this.obj.optionalGradedPool = this.optionalGradedPool;
    this.obj.optionalOverallPool = this.optionalOverallPool;
    this.obj.optionalHighScorePool = this.optionalHighScorePool;
    this.obj.possibleScore = this.possibleScore;
    this.events.push(this.obj);

    // clear data from edit row in table
    this.numberOfTargets = null;
    this.event = null;
    this.costFullNoms = null;
    this.costReducedNoms = null;
    this.optionalGradedPool = null;
    this.optionalOverallPool = null;
    this.optionalHighScorePool = null;
    this.possibleScore = null;

    // set to -1 to differentiate whether editing or new row
    this.row = -1;
  }

  deleteRow(row) {
    this.events.splice(row, 1);
  }
  selectRow(row){
    this.row = row;
    this.numberOfTargets = this.events[row].numberOfTargets;
    this.event = this.events[row].event;
    this.costFullNoms = this.events[row].costFullNoms;
    this.costReducedNoms = this.events[row].costReducedNoms;
    this.optionalGradedPool = this.events[row].optionalGradedPool;
    this.optionalOverallPool = this.events[row].optionalOverallPool;
    this.optionalHighScorePool = this.events[row].optionalHighScorePool;
    this.possibleScore = this.events[row].possibleScore;
  }

  modifyRow(){
    if (this.row > -1){
      this.deleteRow(this.row);
    }
    this.newRow();
  }

  nextScreen() {
    this.router.navigateByUrl('/edit/nomination');
  }

}
