import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:8090/students';

  constructor(private http: HttpClient) {
  }

  saveStudent = (student: any) => {
    return this.http.post(this.url, student);
  }

  getAllStudent = () => {
    return this.http.get(this.url);
  }
}
