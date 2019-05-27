import React, { Component } from 'react';
import MainContainer from './MainContainer.js'

class Teams extends Component {
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
        if (!this.state.loading) {
            return (
                <MainContainer highlight="Teams" sidebar={this.props.title}>

                    <div class="google-loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </MainContainer>
            )
        }
        else {
            return (
                <MainContainer highlight="Teams" sidebar={this.props.title}>
                    <h1 className="page-header">{this.props.title}</h1>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Projects</td>
                                <td>Employees</td>
                                <td>Team Lead</td>
                            </tr>
                            {this.state.teams.map((team, index) => {
                                return (
                                    <tr>
                                        <td>{team.TeamName}</td>
                                        <td>
                                            {team.Projects.map((project, index) => {
                                                return (<ul><li key={index}>{project.ProjectName}</li></ul>)
                                            })}
                                        </td>
                                        <td>{team.Employees.length}</td>
                                        <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </MainContainer>
            )
        }
    }
}


export default Teams;