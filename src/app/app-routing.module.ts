import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionComponent }   from './competition/competition.component';
import { EditComponent }  from './edit/edit.component';
import { UseraccountsComponent }  from './useraccounts/useraccounts.component';
import { SettingsComponent }  from './settings/settings.component';
import {SetupcompetitionComponent} from "./setupcompetition/setupcompetition.component";
import {EventComponent} from "./event/event.component";
import {NominationComponent} from "./nomination/nomination.component";
import {SquadsComponent} from "./squads/squads.component";
import {SquadsheetsComponent} from "./squadsheets/squadsheets.component";
import {SquadcardsComponent} from "./squadcards/squadcards.component";
import {FinancialsComponent} from "./financials/financials.component";
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";
import {PresentationlistsComponent} from "./presentationlists/presentationlists.component";
import {PrizecalculatorComponent} from "./prizecalculator/prizecalculator.component";
import {OfficerecordsComponent} from "./officerecords/officerecords.component";

const routes: Routes = [
  { path: '', redirectTo: '/competition', pathMatch: 'full' },
  { path: 'competition', component: CompetitionComponent },
  { path: 'edit', component: EditComponent,
      children: [
        { path: '', redirectTo: 'setupcompetition', pathMatch: 'full' },
        {path: 'setupcompetition', component: SetupcompetitionComponent},
        {path: 'event', component: EventComponent},
        {path: 'nomination', component: NominationComponent},
        {path: 'squads', component: SquadsComponent},
        {path: 'officerecords', component: OfficerecordsComponent},
        {path: 'squadsheets', component: SquadsheetsComponent},
        {path: 'squadcards', component: SquadcardsComponent},
        {path: 'financials', component: FinancialsComponent},
        {path: 'scoreboard', component: ScoreboardComponent},
        {path: 'presentationlists', component: PresentationlistsComponent},
        {path: 'prizecalculator', component: PrizecalculatorComponent}
      ]},
  { path: 'useraccounts', component: UseraccountsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
