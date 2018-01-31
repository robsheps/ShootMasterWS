import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CompetitionComponent } from './competition/competition.component';
import { UseraccountsComponent } from './useraccounts/useraccounts.component';
import { SettingsComponent } from './settings/settings.component';
import { EditComponent } from './edit/edit.component';
import {SetupcompetitionComponent} from "./setupcompetition/setupcompetition.component";
import {EventComponent} from "./event/event.component";
import {NominationComponent} from "./nomination/nomination.component";
import {SquadsComponent} from "./squads/squads.component";
import {OfficerecordsComponent} from "./officerecords/officerecords.component";
import {SquadsheetsComponent} from "./squadsheets/squadsheets.component";
import {SquadcardsComponent} from "./squadcards/squadcards.component";
import {FinancialsComponent} from "./financials/financials.component";
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";
import {PresentationlistsComponent} from "./presentationlists/presentationlists.component";
import {PrizecalculatorComponent} from "./prizecalculator/prizecalculator.component";
import {CompetitionService} from "./competition/competition.service";
import {EventService} from "./event/event.service";
import {NominationService} from "./nomination/nomination.service";
import {FormsModule} from "@angular/forms";
import {SetupCompetitionService} from "./setupcompetition/setupcompetition.service";


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    EditComponent,
    UseraccountsComponent,
    SettingsComponent,
    SetupcompetitionComponent,
    EventComponent,
    NominationComponent,
    SquadsComponent,
    OfficerecordsComponent,
    SquadsheetsComponent,
    SquadcardsComponent,
    FinancialsComponent,
    ScoreboardComponent,
    PresentationlistsComponent,
    PrizecalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CompetitionService, SetupCompetitionService, EventService, NominationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
