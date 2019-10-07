import {Component} from '@angular/core';
import {Employee} from './models/employee.model';

@Component({
  selector: 'app-erick',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Por defecto nuestros atributos son publicos
  public title = 'Mi primera App en Angular';
  public description = 'Curso de introduccion a Angular 8';
  employee: Employee;
  employeeList: any;

  constructor() {
    this.employeeList = [];
    this.employee = new Employee();
  }

  saveEmployee() {
    this.employeeList.push(this.employee);
    this.employee = new Employee();
  }


}
