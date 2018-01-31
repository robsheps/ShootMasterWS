export class Competition {
  public identifier: string = '';
  public location: string = '';
  public startDate: string = '';
  public endDate: string = '';
  public managedBy: string = '';
  public comment: string = '';
  public status: string = '';
  public checkout: string = '';


  constructor(identifier: string, location: string, startDate: string, endDate: string,
              managedBy: string, comment: string, status: string, availability: string){

    this.identifier = identifier;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.managedBy = managedBy;
    this.comment = comment;
    this.status = status;
    this.checkout = availability;
  }
}
