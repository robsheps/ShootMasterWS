import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



import {SetupCompetition} from "./setupcompetition.model";
import {SETUPCOMPETITION} from "../mock-setupcompetition";

@Injectable()
export class SetupCompetitionService {

  constructor() { }

  getSetupCompetitions(): Observable<SetupCompetition[]> {
    return of(SETUPCOMPETITION);
  }
}
