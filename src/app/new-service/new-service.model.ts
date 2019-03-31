export class Service{
  id:number;
  name:string;
  client:string;
  description:Date;
  creation_date:string;
  term:Date;
  end_date:Date;
  price:number;
  status:StatusService;

  constructor(){
    this.status = StatusService.WAITING;
  }

}

export enum StatusService{
  WAITING = 'WAITING',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
  CANCELED = 'CANCELED',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  FINALIZED = 'FINALIZED'
}
