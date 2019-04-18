import React, {PureComponent} from 'react';
import './renderIndividualStudentReport-styles.css';
import redcross from './redcrossbutton.png';
import greentick from './greentick.png'

class RenderIndividualStudentReport extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {studentDetail} = this.props;
    return (

      <>

        <div>
          <>
            {/*<div className={'flex-container'}>*/}
            {/*<div>*/}
            {/*</div>*/}
            {/*<div >*/}
            {/*<h1>Report</h1>*/}
            {/*</div>*/}
            {/*<div>*/}

            {/*</div>*/}
            {/*</div>*/}
            <span><h1 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '3vw',marginTop:'3vh',marginBottom:'3vh'}}>Report</h1></span>
            {/*<br/>*/}
            <span><h1 style={{marginBottom:'1vh'}}> Name: {studentDetail.name}</h1></span>
            {/*<br/>*/}
            <span><h1 style={{marginBottom:'2vh'}}> StudentID: {studentDetail.id}</h1></span>
            <div className={'flex-container'}>
              <div id="progress-bar" className="all-rounded" style={{flex: '2'}}>
                <div id="progress-bar-percentage" className="all-rounded" style={{width: `${studentDetail.cpi * 10}%`}}>
                  <span>{studentDetail.cpi}/10</span></div>
              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                CPI - {` ${studentDetail.cpi}`} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}

              </div>
            </div>


            <div className={'flex-container'}>
              <div style={{flex: '2', backGroundColor: '#FDFDFE'}}>

              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                {/*CPI - {` ${studentDetail.cpi}`} <br/>*/}
                Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['active backlog'] === false) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}

              </div>
            </div>

            <div className={'flex-container'}>
              <div id="progress-bar" className="all-rounded" style={{flex: '2',}}>
                <div id="progress-bar-percentage" className="all-rounded"
                     style={{width: `${Math.min(1, studentDetail['total credits'] / this.props.creditRequirementDetails['total credits']) * 100}%`}}>
                  <span>{studentDetail['total credits']}/{this.props.creditRequirementDetails['total credits']}</span>
                </div>
              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                Total Credits Earned - {` ${studentDetail['total credits']}`} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}

              </div>
            </div>

            {/*<div  className={'flex-container'}>*/}
            {/*<div id="progress-bar" className="all-rounded" style={{flex:'2'}}>*/}
            {/*<div id="progress-bar-percentage" className="all-rounded" style={{width: `${Math.min(1, studentDetail['total credits']/this.props.creditRequirementDetails['total credits'])*100}%`}}><span>{studentDetail['total credits']}/{this.props.creditRequirementDetails['total credits']}</span></div>*/}
            {/*</div>*/}
            {/*<div style={{marginLeft: '5vw',flex:'3'}}>*/}
            {/*Total Credits Earned - {` ${studentDetail['total credits']}`} <br/>*/}
            {/*/!*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*!/*/}
            {/*</div>*/}
            {/*< div style={{flex:'1'}}>*/}
            {/*</div>*/}
            {/*</div>*/}

            <div className={'flex-container'}>
              <div id="progress-bar" className="all-rounded" style={{flex: '2'}}>
                <div id="progress-bar-percentage" className="all-rounded"
                     style={{width: `${Math.min(1, studentDetail['ict elective'] / this.props.creditRequirementDetails['ict elective']) * 100}%`}}>
                  <span>{studentDetail['ict elective']}/{this.props.creditRequirementDetails['ict elective']}</span>
                </div>
              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                ICT Elective Credits - {` ${studentDetail['ict elective']}`} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}

              </div>
            </div>


            <div className={'flex-container'}>
              <div id="progress-bar" className="all-rounded" style={{flex: '2'}}>
                <div id="progress-bar-percentage" className="all-rounded"
                     style={{width: `${Math.min(1, studentDetail['tech elective'] / this.props.creditRequirementDetails['tech elective']) * 100}%`}}>
                  <span>{studentDetail['tech elective']}/{this.props.creditRequirementDetails['tech elective']}</span>
                </div>
              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                Technical Elective Credits - {` ${studentDetail['tech elective']}`} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}
              </div>
            </div>

            <div className={'flex-container'}>
              <div id="progress-bar" className="all-rounded" style={{flex: '2'}}>
                <div id="progress-bar-percentage" className="all-rounded"
                     style={{width: `${Math.min(1, studentDetail['open elective'] / this.props.creditRequirementDetails['open elective']) * 100}%`}}>
                  <span>{studentDetail['open elective']}/{this.props.creditRequirementDetails['open elective']}</span>
                </div>
              </div>
              <div style={{marginLeft: '5vw', flex: '3'}}>
                Open Elective Credits - {` ${studentDetail['open elective']}`} <br/>
                {/*Active Backlogs - {` ${studentDetail['active backlog'] ? 'Yes' : 'No'}`}*/}
              </div>
              < div style={{flex: '1'}}>
                {(studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) ?
                  <img src={greentick} alt={'Yes'} style={{width: '2vw', height: '2vw'}}/> :
                  <img src={redcross} style={{width: '2.8vw', height: '2.8vw'}} alt={'No'}/>}

              </div>
            </div>
            <br/>
            <div>

              {((studentDetail['tech elective'] >= this.props.creditRequirementDetails['tech elective']) &&
                (studentDetail['ict elective'] >= this.props.creditRequirementDetails['ict elective']) &&
                (studentDetail['open elective'] >= this.props.creditRequirementDetails['open elective']) &&
                (studentDetail['total credits'] >= this.props.creditRequirementDetails['total credits']) &&
                (studentDetail['cpi'] >= this.props.creditRequirementDetails['cpi']) &&
                (studentDetail['active backlog'] === false)) ?
                <div style={{color: 'green', fontWeight: 'bold', textAlign: 'center'}}>{studentDetail['id']},
                  Congratulations! You Are Elligible For Recieving The Degree </div> :
                <div style={{color: 'red', fontWeight: 'bold'}}> {studentDetail['id']}, Sorry! You Are Not Elligible For
                  Recieving The Degree</div>}
            </div>


          </>

        </div>


      </>


    )
  }
}


export default RenderIndividualStudentReport;
