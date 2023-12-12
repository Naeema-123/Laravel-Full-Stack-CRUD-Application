import { Component ,OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  implements OnInit{

  students:any;
  student=new Student();
  id:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this. getStudentsData(); 
    
  }

getStudentsData(){
  this.dataService.getData().subscribe(res=>{
    this.students=res;
 
});

  }
insertData(){
   this.dataService.insertData(this.student).subscribe(res=> {
    this.getStudentsData();
   })
}
deleteData(id: any){
this.dataService.deleteData(id).subscribe(res=> {
this.getStudentsData();
})
}
}

