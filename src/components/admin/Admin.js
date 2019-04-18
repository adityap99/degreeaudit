import React, { PureComponent } from 'react';
import SetCustomFilter from './setCustomFilter/SetCustomFilter';

import { getComponent } from '../../helpers/helpers';

import './admin-styles.css';

class Admin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ComponentToRender: SetCustomFilter,
      renderSetCustomFilterResult: false,
      renderViewIndividualReportStudentDetail: false,
      renderViewBatchReport: false,
    }
  }

  handleOnClick = (e) => {
    e.persist();
    this.setState(() => ({
      ComponentToRender: getComponent(e.nativeEvent.target.innerText),
      renderSetCustomFilterResult: false,
      renderViewIndividualReportStudentDetail: false,
      renderViewBatchReport: false,
    }));
  };

  handleOnClickSetCustomFilterResult = () => (
    this.setState(() => ({
      renderSetCustomFilterResult: true,
    }))
  );

  handleOnClickViewIndividualReportStudentDetail = () => (
    this.setState(() => ({
      renderViewIndividualReportStudentDetail: true,
    }))
  );

  handleOnClickViewBatchReport = () => (
    this.setState(() => ({
      renderViewBatchReport: true,
    }))
  );

  render() {

    const Component = this.state.ComponentToRender;

    return (
      <div className='admin--container'>
        <div className='admin--options--container'>
          <span className='admin--options admin--nohover'>Degree Audit Tool</span>
          <span className='admin--options admin--nohover' >Welcome Admin</span>
          <span
            className='admin--options'
            onClick={this.handleOnClick}
          >
            View Batch Report
          </span>
          <span
            className='admin--options'
            onClick={this.handleOnClick}
          >
            View Report Of An Individual Student
          </span>
          <span
            className='admin--options'
            onClick={this.handleOnClick}
          >
            Set Custom Filters
          </span>
          <span
            className='admin--options admin--logoutbold'
            onClick={this.props.handleLogOut}
          >
            LogOut
          </span>
        </div>

        <Component
          handleOnClickSetCustomFilterResult={this.handleOnClickSetCustomFilterResult}
          renderSetCustomFilterResult={this.state.renderSetCustomFilterResult}
          handleOnClickViewIndividualReportStudentDetail={this.handleOnClickViewIndividualReportStudentDetail}
          renderViewIndividualReportStudentDetail={this.state.renderViewIndividualReportStudentDetail}
          handleOnClickViewBatchReport={this.handleOnClickViewBatchReport}
          renderViewBatchReport={this.state.renderViewBatchReport}
        />
               </div>
    )
  }
}

export default Admin;
