import * as React from 'react';
import './Membership.css';

export interface IMembershipProps {
    membership?: number,
    mainMember: string,
    address: string
}

export class Membership extends React.Component<IMembershipProps> {

    constructor(props: IMembershipProps) {
        super(props);

        // this.state = {
        //     membership: props.membership
        // };
    }


    public render() {
        return (
            <div className="membership">
                {
                    this.props.membership !== undefined ?
                        <div className="membership-info">
                            <label className="membership-name">
                                {this.props.mainMember}
                            </label>    
                            <label className="membership-address">
                                {this.props.address}
                            </label>  
                        </div> :
                        <div>        
                            <div className="membership-icon">
                                <img src={process.env.PUBLIC_URL + '/info-topbar.png'} />
                            </div>
                            <div className="membership-info">
                                <label>Select a connection fom the dropdown list, type the membership number in the search box and press Enter.</label>
                            </div>

                        </div>
                }              
            </div>
        );
    }
}


