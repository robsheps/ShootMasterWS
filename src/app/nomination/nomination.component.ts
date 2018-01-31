import { Component, OnInit, Input} from '@angular/core';

import {Nomination} from "./nomination.model";
import {NominationService} from "./nomination.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nomination',
  templateUrl: './nomination.component.html',
  styleUrls: ['./nomination.component.css']
})

export class NominationComponent implements OnInit {
  public nominations: Nomination[];
  public row: number = -1;
  public obj = {} as Nomination;
  @Input() actaID: number;
  @Input() surname: string;
  @Input() givenNames: string;
  @Input() hcp: number;
  @Input() lvj: string;
  @Input() hgg: string;
  @Input() stateZone: string;
  @Input() club: string;
  @Input() age: number;
  @Input() origSquad: string;
  @Input() teamName: string;
  @Input() nomsTotal: number;
  @Input() nomsPaid: number;

  constructor(private router: Router, private nominationService: NominationService) {}

  ngOnInit() {
    this.getNominations()
  }

  getNominations(): void {
    this.nominationService.getNominations()
      .subscribe(nominations => this.nominations = nominations);
  }

  newRow(){

    // create obj from table
    this.obj.actaID = this.actaID;
    this.obj.surname = this.surname;
    this.obj.givenNames = this.givenNames;
    this.obj.hcp = this.hcp;
    this.obj.lvj = this.lvj;
    this.obj.hgg = this.hgg;
    this.obj.stateZone = this.stateZone;
    this.obj.club = this.club;
    this.obj.age = this.age;
    this.obj.origSquad = this.origSquad;
    this.obj.teamName = this.teamName;
    this.obj.nomsTotal = this.nomsTotal;
    this.obj.nomsPaid = this.nomsPaid;
    this.nominations.push(this.obj);

    // clear data from edit row in table
    this.actaID = null;
    this.surname = null;
    this.givenNames = null;
    this.hcp = null;
    this.lvj = null;
    this.hgg = null;
    this.stateZone = null;
    this.club = null;
    this.age = null;
    this.origSquad = null;
    this.teamName = null;
    this.nomsTotal = null;
    this.nomsPaid = null;

    // set to -1 to differentiate whether editing or new row
    this.row = -1;
  }

  deleteRow(row) {
    this.nominations.splice(row, 1);
  }

  selectRow(row){
    this.row = row;
    this.actaID = this.nominations[row].actaID;
    this.surname = this.nominations[row].surname;
    this.givenNames = this.nominations[row].givenNames;
    this.hcp = this.nominations[row].hcp;
    this.lvj = this.nominations[row].lvj;
    this.hgg = this.nominations[row].hgg;
    this.stateZone = this.nominations[row].stateZone;
    this.club = this.nominations[row].club;
    this.age = this.nominations[row].age;
    this.origSquad = this.nominations[row].origSquad;
    this.teamName = this.nominations[row].teamName;
    this.nomsTotal = this.nominations[row].nomsTotal;
    this.nomsPaid = this.nominations[row].nomsPaid;
  }

  modifyRow(){
    if (this.row > -1){
      this.deleteRow(this.row);
    }
    this.newRow();
  }

  nextScreen() {
    this.router.navigateByUrl('/edit/squads');
  }


}
