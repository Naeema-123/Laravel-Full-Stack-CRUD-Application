import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/students');
  }
insertData(data: Student){
  return this.httpClient.post('http://127.0.0.1:8000/api/addStudent',data); 
}

deleteData(id: any){
  return this.httpClient.delete('http://127.0.0.1:8000/api/deleteStudent/'+id ); 
}
getStudentById(id: any){
  return this.httpClient.get('http://127.0.0.1:8000/api/student/'+id ); 
}

updatetData(id: any,data: Student){
  return this.httpClient.put('http://127.0.0.1:8000/api/updateStudent/'+id,data); 
}

}