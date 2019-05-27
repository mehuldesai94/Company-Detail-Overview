import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TeamsPanel extends Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource + "teams"
        this.state = {
            teams: [],
            loading: false
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then((teamsData) => {
                this.setState((prevData) => {
                    return {
                        teams: teamsData,
                        loading: true
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
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{team.TeamName}</td>
                                            <td>{team.Employees.length} Employees</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        )
    }
}


export default TeamsPanel;