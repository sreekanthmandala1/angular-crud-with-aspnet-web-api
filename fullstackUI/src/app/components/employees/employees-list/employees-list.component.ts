import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: any = [];
  sendReq:any =[]
  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.getEmployeesss()
  }

  getEmployees(): Observable<any> {
    return this.http.get('https://localhost:7211/api/Employees')
  }

  getEmployeesss() {
    this.getEmployees().subscribe((data) => {
      console.log(data)
      this.employees = data
    })
  }
  empId:any;

  postEmployeeData(addEmployeeRequest : Employee){
    debugger
    addEmployeeRequest.id = '27ebc98f-a189-42f6-983e-2ca59f3ee649'
    this.empId = addEmployeeRequest.id
    this.sendReq = [
      {
        id : this.empId,
        name : 'sd',
        email : 'sd@gmail.com',
        phone : 897676,
        salary : 8976,
        department : 'err'
      }
    ]
    this.http.post("https://localhost:7211/api/Employees",this.sendReq).subscribe((data)=>{
      debugger
      console.log(data)
    })
  }
}
