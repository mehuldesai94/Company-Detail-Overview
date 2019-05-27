import React, { Component } from 'react';
import MainContainer from './MainContainer.js'
import moment from 'moment';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource + "projects"
        this.state = {
            projects: [],
            loading: false
        }
    }
    componentDidMount() {

        fetch(this.dataSource)
            .then(res => res.json())
            .then((projectsData) => {
                this.setState((prevData) => {
                    return {
                        projects: projectsData,
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
                <MainContainer highlight="Projects" sidebar={this.props.title}>
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
                <MainContainer highlight="Projects" sidebar={this.props.title}>
                    <h1 className="page-header">{this.props.title}</h1>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Start Date</td>
                                <td>End Date</td>
                            </tr>
                            {this.state.projects.map((project, index) => {
                                var endDate = "";
                                if (project.ProjectEndDate == null) {
                                    endDate = "n/a"
                                }
                                else {
                                    endDate = moment(project.ProjectEndDate).format('LL');
                                }
                                return (
                                    <tr>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                        <td>{endDate}</td>
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

export default Projects;