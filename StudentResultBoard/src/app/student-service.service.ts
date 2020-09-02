import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  // Get api for student results
  getResults() {
    return this.http.get('../../assets/database/data.json');
 }
}
