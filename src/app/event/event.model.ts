export class Event {
  public numberOfTargets: number = 0;
  public event: string = '';
  public costFullNoms: number = 0;
  public costReducedNoms: number = 0;
  public optionalGradedPool: number = 0;
  public optionalOverallPool: number = 0;
  public optionalHighScorePool: number = 0;
  public possibleScore: number = 0;


  constructor(numberOfTargets: number, event: string, costFullNoms: number, costReducedNoms: number,
              optionalGradedPool: number, optionalOverallPool: number, optionalHighScorePool: number, possibleScore: number) {

    this.numberOfTargets = numberOfTargets;
    this.event = event;
    this.costFullNoms = costFullNoms;
    this.costReducedNoms = costReducedNoms;
    this.optionalGradedPool = optionalGradedPool;
    this.optionalOverallPool = optionalOverallPool;
    this.optionalHighScorePool = optionalHighScorePool;
    this.possibleScore = possibleScore;
  }
}
