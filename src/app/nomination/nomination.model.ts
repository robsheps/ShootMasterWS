export class Nomination {
  public actaID: number = 0;
  public surname: string = '';
  public givenNames: string = '';
  public hcp: number = 0;
  public lvj: string = '';
  public hgg: string = '';
  public stateZone: string = '';
  public club: string = '';
  public age: number = 0;
  public origSquad: string = '';
  public teamName: string = '';
  public nomsTotal: number = 0;
  public nomsPaid: number = 0;

  constructor(actaID: number, surname: string, givenNames: string, hcp: number, lvj: string, hgg: string, stateZone: string,
              club: string, age: number, origSquad: string, teamName: string, nomsTotal: number, nomsPaid: number) {

    this.actaID = actaID;
    this.surname = surname;
    this.givenNames = givenNames;
    this.hcp = hcp;
    this.lvj = lvj;
    this.hgg = hgg;
    this.stateZone = stateZone;
    this.club = club;
    this.age = age;
    this.origSquad = origSquad;
    this.teamName = teamName;
    this.nomsTotal = nomsTotal;
    this.nomsPaid = nomsPaid;
  }
}
