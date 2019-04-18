import React, { Component } from 'react';

import RenderFilteredStudents from '../../renderFilteredStudents/RenderFilteredStudents';

import './viewBatchReport-styles.css';
import {filterBySubject, getAllStudentsDetails} from '../../../data/admin/adminHelpers';

import {
  getCreditRequirements,
  getCreditRequirementsByBatch,
  getStudentDetails
} from '../../../data/student/studentHelpers';
import RenderIndividualStudentReport from '../../renderIndividualStudentReport/RenderIndividualStudentReport';
class ViewBatchReport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      batch: '',
      filteredStudents: [],
      renderResult: false,
      renderStudent: false,
      studentDetail: '',
      creditRequirementDetailsForStudent: '',
      creditRequirementDetailsOfBatch: '',
      batchreportbuttonclick:false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.renderViewBatchReport) {
      this.setState(() => ({
        batch: '',
        filteredStudents: [],
        renderResult: false,
        renderStudent: false,
        studentDetail: '',
        creditRequirementDetailsForStudent: '',
        creditRequirementDetailsOfBatch: '',
        batchreportbuttonclick:false,
      }))
    }
  }

  showStudentDetail = (id) => {
    this.setState(() => ({
      renderStudent: true,
      studentDetail: getStudentDetails(id),
      creditRequirementDetailsForStudent: getCreditRequirements(id),
    }))
  };


  render() {
    return (
      <>
        {!this.state.renderResult || !this.props.renderViewBatchReport ?
          <div className='admin--view_batch_report--container'>
            {/*<div className='admin--view_batch_report--wrapper'>*/}
              <div className='admin--view_batch_report--batch'>

              <span>Batch :          </span>

                <select value={this.state.batch}
                        onChange={(e) => {
                          e.persist();
                          this.setState(() => ({batch: e.nativeEvent.target.value}))
                        }}>
                  <option>Select a batch</option>
                  <option>BTech 2016</option>
                  <option>BTech 2015</option>
                  <option>BTech 2017</option>
                  <option>BTech 2018</option>
                  <option>MTech 2017</option>
                  <option>MTech 2018</option>
                  <option>MScIT 2017</option>
                  <option>MScIT 2018</option>
                </select>




              </div>




              <button
                  className="admin--view_batch_report--submitbutton"
                      onClick={() => {
                        this.setState(() => ({
                          filteredStudents: getAllStudentsDetails(this.state.batch),
                          renderResult: !!getAllStudentsDetails(this.state.batch).length,
                          creditRequirementDetailsOfBatch: getCreditRequirementsByBatch(this.state.batch),
                          batchreportbuttonclick:true

                        }));
                        this.props.handleOnClickViewBatchReport();
                      }
                      }
              >
                Go!
              </button>

            {(this.state.batchreportbuttonclick)?<span className={'denied'}>Select A Batch First!  </span>:<span>  </span>}



          </div> : !this.state.renderStudent ?
            <div className='admin--view_batch_report--detail_component'>
              <RenderFilteredStudents studentDetails={this.state.filteredStudents}
                                      creditRequirementDetails={this.state.creditRequirementDetailsOfBatch}
                                      onStudentClick={this.showStudentDetail}/>
            </div> : <div className='admin--view_batch_report--detail_component'>
              <RenderIndividualStudentReport
                studentDetail={this.state.studentDetail}
                creditRequirementDetails={this.state.creditRequirementDetailsForStudent}
              />
            </div>
        }
      </>
    )
  }
}

export default ViewBatchReport;
