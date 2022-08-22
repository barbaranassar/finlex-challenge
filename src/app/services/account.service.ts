import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { AccountPayload } from '../models/account-payload.model';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient) { }
  public getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${baseUrl}/accounts`);
  }
  public get(id: number): Observable<Account> {
    return this.http.get<Account>(`${baseUrl}/${id}`);
  }
  public create(payload: AccountPayload): Observable<Account> {
    return this.http.post<Account>(baseUrl, payload);
  }
  public update(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${baseUrl}/${id}`, account);
  }
}