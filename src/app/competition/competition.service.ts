import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Competition} from "./competition.model";
import {COMPETITION} from "../mock-competition";

@Injectable()
export class CompetitionService {

  constructor() { }

  getCompetitions(): Observable<Competition[]> {
    return of(COMPETITION);
  }
}
