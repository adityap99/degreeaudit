import React, { PureComponent } from 'react';
import {getStudentDetails} from '../../../data/student/studentHelpers';
import {getCreditRequirements} from '../../../data/student/studentHelpers';

import './viewIndividualReport-styles.css';

import RenderIndividualStudentReport from "../../renderIndividualStudentReport/RenderIndividualStudentReport";

class ViewIndividualReport extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      batch: '',
      studentId: '',
      studentDetail: '',
      creditRequirementDetails: {},
      renderStudentDetail: false,
      isGone:false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.renderViewIndividualReportStudentDetail) {
      this.setState(() => ({
        batch: '',
        studentId: '',
        studentDetail: '',
        creditRequirementDetails: {},
        renderStudentDetail: false,
        isGone:false,
      }))
    }
  }

  render() {

    return ( !this.state.renderStudentDetail ?
      <div className='admin--view_individual_report--container'>
        <span>Student Id  :  </span>
        <input
          type="text"
          value={this.state.studentId}
          onChange={(e) => {
            e.persist();
            this.setState(() => ({studentId: e.nativeEvent.target.value}));
          }}
        />
      <br />
        <button
            className="admin--view_individual_report--submitbutton"  onClick={() => {
              this.setState(() => ({
            studentDetail: getStudentDetails(this.state.studentId),
            creditRequirementDetails:getCreditRequirements(this.state.studentId),
            renderStudentDetail: typeof getStudentDetails(this.state.studentId) === 'object',
                  isGone:true

          }));
              this.props.handleOnClickViewIndividualReportStudentDetail();
        }}
        >
          Go!
        </button>

        <br/>
          {(this.state.isGone)?<span className={'denied'}>The student with entered ID doesn't exist in database.</span>:<span> </span>}
      </div> :
      <div className='admin--view_individual_report--detail_component'>

          <RenderIndividualStudentReport studentDetail={this.state.studentDetail} creditRequirementDetails={this.state.creditRequirementDetails}/>

      </div>
    )
  }
}

export default ViewIndividualReport;
