import * as React from 'react';
import './TopBar.css';
import { BasicDropdown } from '../../containers/common/FluentUi/BasicDropDown';
import { Membership, IMembershipProps } from '../../containers/membership/Membership';
import AuthProvider from '../../containers/auth/AuthProvider';

import { SearchBox, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';
import axios from 'axios';
import IMembership from '../../interfaces/IMembership';
import { IInfoDialogBoxProps, InfoDialogBox } from '../../containers/common/FluentUi/InfoDialogBox';
import { BasicSpinner } from '../../containers/common/FluentUi/BasicSpinner';

import { connect } from 'react-redux';
import IMembershipState from '../../interfaces/IMembershipState'
import { setMembershipAction } from '../../store/actions/MembershipAction';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';


export interface ITopBarProps {
}

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 143 } };


let membershipSummary: IMembership = {
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

// ...response.data,

let membershipProps: IMembershipProps = {
    membership: undefined,
    mainMember: '',
    address: ''
};

interface IProps{
    membership: IMembership,
    onMembershipAcquired: (membership: IMembership) => void;
}

let infoDialogBoxProps: IInfoDialogBoxProps = {
    target: '#searchBox',
    headline: 'Information',
    message: 'Please enter a valid membership number.'
}

 class TopBar extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    state = {
        membershipState: membershipProps,
        searching: false,
        invalidMebership: false,
        responseCode: 200
    }

    searchMembershipHandler = (typedMembershipNumber: string | undefined) => {

        if (typedMembershipNumber !== 'undefined') {
            let mn: string = typedMembershipNumber!;

            if (/^\d+$/.test(mn)) {
                this.setState({ searching: true });

                const url = 'http://localhost:7071/api/teachers/memberships/' + Number(typedMembershipNumber) + '/ricardoadm@npteachershealth.com.au';
                axios.get(url).
                    then(response => {
                        membershipSummary = {
                            ...response.data,
                            Principal: {
                                ...response.data.Principal,
                                MembershipNumber: Number(typedMembershipNumber)
                            }
                        };

                        membershipProps.membership = Number(typedMembershipNumber);
                        membershipProps.mainMember = membershipSummary.Principal.FirstName + ' '
                            + membershipSummary.Principal.MiddleName + ' '
                            + membershipSummary.Principal.Surname;
                        membershipProps.address = membershipSummary.Principal.Address;

                        this.setState({ responseCode: response.status, membershipState: membershipProps, searching: false, invalidMebership: false });

                        this.props.onMembershipAcquired(membershipSummary);

                        console.log('Redux membership =' + this.props.membership);
                    })
                    .catch(error => {
                        this.setState({ responseCode: error.response.status, searching: false, invalidMebership: false });
                        console.log('Search membership error: ' + error);
                    });
            }
            else {
                this.setState({ invalidMebership: true });
            }
        }
    }

    clearOrSearchEventHadler = () => {

        membershipProps.address = '';
        membershipProps.mainMember = '';
        membershipProps.membership = undefined;

        this.setState({
            membershipState: membershipProps,
            searching: false,
            invalidMebership: false,
            responseCode: 200
        });
    }

    getErrorMessage() {
        if (this.state.responseCode === 400 || this.state.responseCode === 404) {
            return 'Membership not found.';
        }
        else {
            return 'Oh no! There has been an error.';
        }
    }

    render() {
        return (
            <div className="topbar">
                <div className="topbar-dll">
                    <BasicDropdown />
                </div>

                {
                    this.state.invalidMebership ?
                        <div>
                            <InfoDialogBox {...infoDialogBoxProps} />
                        </div> : null
                }

                <div className="topbar-searchbox">
                    <SearchBox
                        id='searchBox'
                        styles={searchBoxStyles}
                        placeholder="Membership #"
                        onClear={() => this.clearOrSearchEventHadler()}
                        onSearch={membershipNumber => this.searchMembershipHandler(membershipNumber)}
                    />
                </div>

                {
                    this.state.searching ?
                        <div>
                            <BasicSpinner />
                        </div> : this.state.responseCode === 200 ?
                            <div className="topbar-membership">
                                <Membership {...this.state.membershipState} />
                            </div> :
                            <div>
                                <div className="topbar-search-membership-error-icon">
                                    <img src={process.env.PUBLIC_URL + '/error-topbar.png'} />
                                </div>
                                <div className="topbar-search-membership-error-lbl">
                                    <label>
                                        {this.getErrorMessage()}
                                    </label>
                                </div>
                            </div>
                }

                <div>

                    <AuthProvider/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state: IMembershipState) => {
    return { ...state.member };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IMembershipState, any, Action>) => {
    return {
        onMembershipAcquired: (membership: IMembership) => (dispatch)(setMembershipAction(membership))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);