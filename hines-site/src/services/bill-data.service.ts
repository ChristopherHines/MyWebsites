import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BillDataService {

  constructor(private http: HttpClient) { }

  getBillData(){
    return this.http.get('192.168.1.28:2000/billData')
  }
}