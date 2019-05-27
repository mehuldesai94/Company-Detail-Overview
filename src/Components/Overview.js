import React, { Component } from 'react'
import MainContainer from './MainContainer';
import EmployeesPanel from './EmployeesPanel';
import TeamsPanel from './TeamsPanel';
import ProjectsPanel from './ProjectsPanel';

class Overview extends Component {
    render() {
        return (
            <div>
            <MainContainer highlight="Overview" sidebar={this.props.title}>
                <h1 className="page-header">{this.props.title}</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectsPanel title="Projects" dataSource={this.props.dataSource} />
                    </div>
                    <div className="col-md-4">
                        <TeamsPanel title="Teams" dataSource={this.props.dataSource} />
                    </div>
                    <div className="col-md-4">
                        <EmployeesPanel title="Employees" dataSource={this.props.dataSource} />
                    </div>
                </div>
            </MainContainer>
            </div>
        )
    }
}

export default Overview;