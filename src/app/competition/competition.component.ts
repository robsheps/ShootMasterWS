import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CurrencyPipe } from '@angular/common';

import {Competition} from "./competition.model";
import {CompetitionService} from "./competition.service";


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  sign = 'remove';
  buttonType = 'default'
  competitions: Competition[];
  selectedCompetition: Competition;

  constructor(private router: Router, private competitionService: CompetitionService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions(): void {
    this.competitionService.getCompetitions()
      .subscribe(competitions => this.competitions = competitions);
  }

  btnClickAdd= function () {
    this.router.navigateByUrl('/edit/setupcompetition');
  }

  toggleSign(competition: Competition) {
      this.selectedCompetition = competition;
  }

}
