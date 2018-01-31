import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SetupCompetition} from "./setupcompetition.model";
import {SetupCompetitionService} from "./setupcompetition.service";

@Component({
  selector: 'app-setupcompetition',
  templateUrl: './setupcompetition.component.html',
  styleUrls: ['./setupcompetition.component.css']
})
export class SetupcompetitionComponent implements OnInit {
  public setupCompetitions: SetupCompetition[];

  showSelected : boolean;

  constructor(private router: Router, private setupCompetitionService: SetupCompetitionService) {
    this.showSelected = false;
  }

  ngOnInit() {
  }

  getSetupCompetition(): void {
    this.setupCompetitionService.getSetupCompetitions()
      .subscribe(setupCompetitions => this.setupCompetitions = setupCompetitions);
  }

  showInfo(event) {

    if (event.target.id == "squadconfig" ){
      this.showSelected = true;
    }else{
      this.showSelected = false;
    }
  }


  nextScreen = function () {
    this.router.navigateByUrl('/edit/event');
  }


}
