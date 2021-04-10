import React from 'react';
import './App.css';
import { NavMenu } from '../src/containers/menu/NavMenu';
import { Layout } from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import IMembership from './interfaces/IMembership';


initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");

const membershipProps: IMembership = {
  Contribution: {
    DebitOnDate: '',
    DueDate: '',
    Frequency: '',
    FrequencyEffectiveDate: '',
    PaidToDate: ''
  },
  DirectCredit: {
    Account: '',
    AccountId: 0,
    AccountName: '',
    Bsb: '',
    IsActive: false
  },
  DirectDebit: {
    Account: '',
    AccountId: 0,
    AccountName: '',
    Bsb: '',
    IsActive: false
  },
  Fault: {
    Code: {
      Value: ''
    },
    Reason: {
      Text: ''
    },
    Detail: {
      FaultDetails: ''
    }
  },
  Group: {
    EffectiveDateTime: '',
    GroupCode: ''
  },
  HealthCover: {
    ContributionFrequency: '',
    PlanId: 0,
    ProductRateCode: '',
    EffectiveDateTime: '',
    Status: '',
    FutureDatedPlanLine: false
  },
  Principal:
  {
    MembershipNumber: 0,
    FirstName: '',
    MiddleName: '',
    Surname: '',
    Gender: '',
    Address: ''
  }
};


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <TopBar {...{membership: membershipProps}} />
        <NavMenu />
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
