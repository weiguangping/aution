import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  'rxjs/Rx';
@Injectable()
export class WebSocketService {
  ws:WebSocket;
  constructor() { }
  createObservableSaocket(url:string,id:number):Observable<any>{
    this.ws=new WebSocket(url);
    return new Observable<any>(
      observer=>{
        this.ws.onmessage=(event)=>observer.next(event.data);
        this.ws.onerror=(event)=>observer.error(event);
        this.ws.onclose=(event)=>observer.complete();
        this.ws.onopen=(event)=>this.sendMessage({productId:id});
      }
    ).map(message => { JSON.parse(message)});
  }
  sendMessage(message:any){
    this.ws.send(JSON.stringify(message));
  }
}
