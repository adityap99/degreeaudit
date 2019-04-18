import React, { PureComponent } from 'react';
import SetCustomFilter from '../admin/setCustomFilter/SetCustomFilter';

import { getComponent } from '../../helpers/helpers';

import './spc-styles.css';

class SPC extends PureComponent {
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
      <div className='spc--container'>
        <div className='spc--options--container'>
          <span className='spc--options spc--nohover'>Degree Audit Tool</span>
          <span className='spc--options spc--nohover' >Welcome SPC</span>
          <span
            className='spc--options'
            onClick={this.handleOnClick}
          >
            View Batch Report
          </span>
          <span
            className='spc--options'
            onClick={this.handleOnClick}
          >
            View Report Of An Individual Student
          </span>
          <span
            className='spc--options'
            onClick={this.handleOnClick}
          >
            Set Custom Filters
          </span>
          <span
            className='spc--options spc--logoutbold'
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

export default SPC;
