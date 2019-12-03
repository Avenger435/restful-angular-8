import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl= 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient){
    
  }

  createEmployee(employee: import("./employee").Employee) {
    throw new Error("Method not implemented.");
  }
  deleteEmployee(id: number) {
    throw new Error("Method not implemented.");
    return 1;
  }
  getEmployeesList(): import("rxjs").Observable<import("./employee").Employee[]> {
    throw new Error("Method not implemented.");
  }


}
