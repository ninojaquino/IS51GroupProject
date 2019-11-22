import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface IToast {
  message: string;
  timeout: number;
  info: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastChanged: Subject<any> = new Subject<any>();
  constructor() { }

  showToast(type: string, message: string, timeout: number) {
    this.toastChanged.next({
      type,
      message,
      timeout
    });
  }


}
