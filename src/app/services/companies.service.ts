import { Injectable } from '@angular/core';
import { Uris } from './Uris';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get(`${Uris.COMPANIES}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  createRandomCompany(obj: any) {
    return this.http.post(`${Uris.COMPANIES}`, obj).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  deleteCompany(id: string) {
    return this.http.delete(`${Uris.COMPANIES}/${id}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }
}
