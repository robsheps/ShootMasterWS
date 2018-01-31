export class SetupCompetition {
  public discipline: string = '';
  public location: string = '';
  public layouts: number = 0;
  public startDate: string;
  public endDate: string;
  public managedBy: string = '';
  public squadConfig: string = '';
  public waveConfig: string = '';

  constructor(discipline: string, location: string, layouts: number, startDate: string, endDate: string, managedBy: string, squadConfig: string, waveConfig: string){

    this.discipline = discipline;
    this.location = location;
    this.layouts = layouts;
    this.startDate = startDate;
    this.endDate = endDate;
    this.managedBy = managedBy;
    this.squadConfig = squadConfig;
    this.waveConfig = waveConfig;
  }
}
