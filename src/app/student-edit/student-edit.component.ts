import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../student';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id:any;
data:any;
student=new Student();
  constructor(private route:ActivatedRoute,private dataService:DataService){}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
this.getData();

}

getData(){
  this.dataService.getStudentById(this.id).subscribe(res => {
   // console.log(res);
   this.data=res;
   this.student=this.data;
    })
}
updateStudent(){
  this.dataService.updatetData(this.id,this.student).subscribe(res => {

  });
}
}