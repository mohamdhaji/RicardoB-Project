import IMembershipState from '../../interfaces/IMembershipState';
import { SetMembershipAction, SET_MEMBERSHIP } from '../actions/MembershipAction';

const initialMembershipState: IMembershipState = {
    member: {
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
            FutureDatedPlanLine: true
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
    }
}

const membershipReducer = (state = initialMembershipState, action: SetMembershipAction) => {
    switch (action.type) {
        case SET_MEMBERSHIP:
            return {
                ...state,
                member: {
                    Contribution: {
                        DebitOnDate: action.membership.Contribution.DebitOnDate,
                        DueDate: action.membership.Contribution.DueDate,
                        Frequency: action.membership.Contribution.Frequency,
                        FrequencyEffectiveDate: action.membership.Contribution.FrequencyEffectiveDate,
                        PaidToDate: action.membership.Contribution.PaidToDate
                    },
                    DirectCredit: {
                        Account: action.membership.DirectCredit.Account,
                        AccountId: action.membership.DirectCredit.AccountId,
                        AccountName: action.membership.DirectCredit.AccountName,
                        Bsb: action.membership.DirectCredit.Bsb,
                        IsActive: action.membership.DirectCredit.IsActive
                    },
                    DirectDebit: {
                        Account: action.membership.DirectDebit.Account,
                        AccountId: action.membership.DirectDebit.AccountId,
                        AccountName: action.membership.DirectDebit.AccountName,
                        Bsb: action.membership.DirectDebit.Bsb,
                        IsActive: action.membership.DirectDebit.IsActive
                    },
                    Fault: {
                        Code: {
                            Value: action.membership.Fault.Code
                        },
                        Reason: {
                            Text: action.membership.Fault.Reason
                        },
                        Detail: {
                            FaultDetails: action.membership.Fault.Detail
                        }
                    },
                    Group: {
                        EffectiveDateTime: action.membership.Group.EffectiveDateTime,
                        GroupCode: action.membership.Group.GroupCode
                    },
                    HealthCover: {
                        ContributionFrequency: action.membership.HealthCover.ContributionFrequency,
                        PlanId: action.membership.HealthCover.PlanId,
                        ProductRateCode: action.membership.HealthCover.ProductRateCode,
                        EffectiveDateTime: action.membership.HealthCover.EffectiveDateTime,
                        Status: action.membership.HealthCover.Status,
                        FutureDatedPlanLine: action.membership.HealthCover.FutureDatedPlanLine
                    },
                    Principal: {
                        MembershipNumber: action.membership.Principal.MembershipNumber,
                        FirstName: action.membership.Principal.FirstName,
                        MiddleName: action.membership.Principal.MiddleName,
                        Surname: action.membership.Principal.Surname,
                        Gender: action.membership.Principal.Gender,
                        Address: action.membership.Principal.Address
                    }
                }
            }
        default:
            return state;
    }
}

export default membershipReducer;
