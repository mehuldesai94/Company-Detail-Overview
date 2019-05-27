import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EmployeesPanel extends Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource + "employees"
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then((employeeData) => {
                this.setState((prevData) => {
                    return {
                        employees: employeeData
                    }
                });
            })
            .catch((err) => {
                console.log("cannot get data");
            });
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((employee, index) => {
                                    return (
                                        <tr key={employee._id}>
                                            <td key={index}>{employee.FirstName} {employee.LastName}</td>
                                            <td>{employee.Position.PositionName}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        )
    }
}

export default EmployeesPanel;