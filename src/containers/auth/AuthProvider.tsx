import * as Msal from 'msal';
import React from 'react'
import { AzADConfig } from '../../config/AzADConfig';
import './AuthProvider.css';
import { connect } from 'react-redux';
import IAuthState from '../../interfaces/IAuth';
import { setAuthAction } from '../../store/actions/AdAction';
import IState from '../../interfaces/IState';
import { RootState } from '../../index';


// import { Dispatch } from "redux";

import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';



// Scopes for id token to be used at MS Identity Platform endpoints. 
const loginRequest = {
  scopes: AzADConfig.auth.graphScopes
};

// Initialize msal object with config settings.
const myMSALObj = new Msal.UserAgentApplication(AzADConfig);
// const userAgentApplication = new Msal.UserAgentApplication("your_client_id", null, (errorDes, token, error, tokenType) =>
//     {

//     })
console.log(AzADConfig)


interface IProps {
  token?: string;
  email?: string;
  expires?: string;
  onTokenAcquired?: (token: string, expires: string, email: string) => void;
}

class AuthProvider extends React.Component<any> {


  componentDidMount() {
    const account = myMSALObj.getAccount();
    if (account) {
       this.props.onTokenAcquired(this.props.token, this.props.expires, account.userName);
      this.acquireToken();
    }
    else {
      this.logIn();
    }
  }

  // Get token.
  acquireToken = async () => {
    myMSALObj.acquireTokenSilent(loginRequest).then(loginResponse => {
      this.props.onTokenAcquired(loginResponse.idToken.rawIdToken, loginResponse.idToken.expiration, this.props.email);
    }).catch(error => {
      console.log(error);
    });
  }

  // Redirect to login page.
  logIn = () => {
    myMSALObj.loginRedirect(loginRequest);
  }

  render() {
    return (
      // <>
      //   <h2>name : {this.state.userEmail}</h2>
      //   <h2>expires : {this.state.authTokenExpiry}</h2>
      //   <h2>token : {this.state.authToken}</h2>
      // </>
      <div className="authprovider" >
        {/* <div className="authprovider-icon">
          <img src={process.env.PUBLIC_URL + '/user.png'} />
        </div> */}
        <div className="authprovider-info">
          <label>{this.props.email}</label>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state:RootState):IState => {
  return { 
    auth: {...state.adr.auth}
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IAuthState, any, Action>) => {
  return {
    onTokenAcquired: (token: string, expires: string, email: string) => (dispatch)(setAuthAction(token, expires, email))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
