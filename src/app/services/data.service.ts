import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataUrl = `${environment.apiUrl}/data.json`;

  constructor(private readonly http: HttpClient) {}

  getData(): Observable<IDataModel> {
    return this.http.get<IDataModel>(this.dataUrl);
  }
}
