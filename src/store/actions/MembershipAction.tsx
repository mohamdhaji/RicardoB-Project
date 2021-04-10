import IMembership from '../../interfaces/IMembership';
export const SET_MEMBERSHIP = 'SET_MEMBERSHIP';

interface ISetMembership {
    type: typeof SET_MEMBERSHIP;
    membership: IMembership;
}

export type SetMembershipAction = ISetMembership;

// Action creator.
export const setMembershipAction = (membership: IMembership) => {
    return {
        type: SET_MEMBERSHIP,
        membership
    }
}
