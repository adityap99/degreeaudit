import React, { Component } from 'react';

import './login-styles.css';
import './loginassets/vendor/bootstrap/css/bootstrap.min.css';
import './loginassets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './loginassets/vendor/animate/animate.css';
import './loginassets/vendor/css-hamburgers/hamburgers.min.css';
import './loginassets/vendor/animsition/css/animsition.min.css';
import './loginassets/vendor/select2/select2.min.css';
import './loginassets/vendor/daterangepicker/daterangepicker.css';
import './loginassets/css/util.css';
import './loginassets/css/main.css';



import  logo from './dalogo.png'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks:0
        }
    }



    handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.isClicked)
        this.props.handleLogIn(this.props.username, this.props.password);
        console.log(this.props.validityCheck)



    };

    render() {
        return (

            <div className = "limiter">
                <div className = "container-login100" style={{minHeight:'0'}} >
                    < div  className = "wrap-login100" >
                        < form className = "login100-form validate-form p-l-55 p-r-55 p-t-178" >
                     < span className = "login100-form-title" >
                           <span>
                         < img src = {logo}  style={{width: "30%", height: "30%"}}/ >
                               < /span> DEGREE AUDIT TOOL
                      < /span>

              <div className="flex-col-c p-t-60 p-b-40">
              </div>

    < div className = "wrap-input100 validate-input m-b-16"  >
        < input  className = "input100 logininput" type = "text" autoComplete="off"
                 name = "username" onChange = {this.props.handleUserNameChange} placeholder = "Username" />
        < span className = "focus-input100" > < /span>
  </div>

  <div
      className = "wrap-input100 validate-input">
        < input
            className = "input100 logininput "
            type = "password"
            name = "pass"
            placeholder = "Password"
            onChange = {this.props.handlePasswordChange} />
          < span className = "focus-input100" > < /span>
  </div>

  <div  className = "text-right p-t-13 p-b-23" >
    < /div>

    <div className="container-login100-form-btn">
      <button className="login100-form-btn loginbutton" onClick={(e) => this.handleSubmit(e)}  type="submit">
        Go!
      </button>
    </div>

    < div className = "flex-col-c p-t-30 p-b-40" >
      </div>
                        </form>
                    </div>
                </div>
                {
                    ((this.props.validityCheck) && (this.props.isClicked))? <div className = "flex-col-c p-t-30 p-b-40 login--denied" style={{fontWeight:'bold',fontFamily:'arial'}}>Authentication Failed! Entered Username Or Password Is Incorrect </div> : <div> </div>}

            </div>

    )}
        }

    export default Login;