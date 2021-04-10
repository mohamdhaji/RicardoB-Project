export default interface IMembership {
    Contribution: {
        DebitOnDate: string,
        DueDate: string,
        Frequency: string,
        FrequencyEffectiveDate: string,
        PaidToDate: string
    },
    DirectCredit: {
        Account: string,
        AccountId: number,
        AccountName: string,
        Bsb: string,
        IsActive: boolean
    },
    DirectDebit: {
        Account: string,
        AccountId: number,
        AccountName: string,
        Bsb: string,
        IsActive: boolean
    },
    Fault: {
        Code: {
            Value: string
        },
        Reason: {
            Text: string
        },
        Detail: {
            FaultDetails: string
        }
    },
    Group: {
        EffectiveDateTime: string,
        GroupCode: string
    },
    HealthCover: {
        ContributionFrequency: string,
        PlanId: number,
        ProductRateCode: string,
        EffectiveDateTime: string,
        Status: string,
        FutureDatedPlanLine: boolean
    },
    Principal:
    {
        MembershipNumber: number,
        FirstName: string,
        MiddleName: string,
        Surname: string,
        Gender: string,
        Address: string
    }
}



