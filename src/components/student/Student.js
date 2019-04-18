import React, { PureComponent } from 'react';
import RenderIndividualStudentReport from '../renderIndividualStudentReport/RenderIndividualStudentReport';

import './student-styles.css';
import {getCreditRequirements, getStudentDetails} from '../../data/student/studentHelpers';

class Student extends PureComponent {
  render() {
    return (
      <div className='student--container'>
        <div className='student--options--container'>
          <span className='student--options student--nohover'>Degree Audit Tool</span>
          <span className='student--options student--nohover' >Welcome {this.props.id}</span>
          <span
            className='student--options student--logoutbold'
            onClick={this.props.handleLogOut}
          >
            LogOut
          </span>
        </div>
        <div className='student--view_individual_report--detail_component'>
          <RenderIndividualStudentReport studentDetail={getStudentDetails(this.props.id)}
                                         creditRequirementDetails={getCreditRequirements(this.props.id)}
          />
        </div>
      </div>
    )
  }
}

export default Student;
