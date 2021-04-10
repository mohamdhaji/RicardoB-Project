import * as React from 'react';
import './BasicSpinner.css';

export function BasicSpinner() {
    return (
        <div className="spinner-container" >
            <div className="spinner-img">
                <img src={process.env.PUBLIC_URL + '/spinner.gif'} />
            </div>
            <div className="spinner-lbl">
                <label>Fetching membership, please wait ...</label>
            </div>

        </div>
    );
};
