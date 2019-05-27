import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

class ProjectsPanel extends Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource + "projects"
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then((projectsData) => {
                this.setState((prevData) => {
                    return {
                        projects: projectsData
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
                                {this.state.projects.map((project, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{project.ProjectName}</td>
                                            <td>Active {moment().diff(moment(project.ProjectStartDate), 'days')} Days</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        )
    }
}


export default ProjectsPanel;