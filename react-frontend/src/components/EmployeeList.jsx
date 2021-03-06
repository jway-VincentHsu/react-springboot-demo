import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees:[],
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Employee List</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Employee Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                     employee => 
                                     <tr key={employee.id}>
                                         <td>{employee.firstName}</td>
                                         <td>{employee.lastName}</td>
                                         <td>{employee.email}</td>
                                     </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeList;