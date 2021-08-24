import { Person } from '../person.abstract';
import { IEmployee } from './employee.model';

export class EmployeeeService extends Person implements IEmployee {
    empCode: number;
    name: string;
    constructor(name: string, empCode: number) {
        super(name); // must call super()
        this.empCode = empCode;
    }
    find(name: string): EmployeeeService {
        // execute AJAX request to find an employee from a db
        return new EmployeeeService(name, 1);
    }
}
