// import { render } from '@testing-library/react';
import * as React from 'react';
import '../../App.css';
import './ddr.css';

import { MaskedTextField, TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker } from 'office-ui-fabric-react';
import { PrimaryButton } from 'office-ui-fabric-react';


const dropdownStyles: Partial<IDropdownStyles> = {
    // dropdown: { width: 120 },
    dropdown: { marginTop: 0 }
};

const options: IDropdownOption[] = [
    { key: 'thf', text: 'Teachers/Uni' },
    { key: 'nmh', text: 'Nurses' },
];

// const customButtonStyles: IButtonStyles = {

// };

// const DayPickerStrings: IDatePickerStrings = {
//     months: [
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July',
//         'August',
//         'September',
//         'October',
//         'November',
//         'December',
//     ],

//     shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

//     days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

//     shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

//     goToToday: 'Go to today',
//     prevMonthAriaLabel: 'Go to previous month',
//     nextMonthAriaLabel: 'Go to next month',
//     prevYearAriaLabel: 'Go to previous year',
//     nextYearAriaLabel: 'Go to next year',
//     closeButtonAriaLabel: 'Close date picker',
//     monthPickerHeaderAriaLabel: '{0}, select to change the year',
//     yearPickerHeaderAriaLabel: '{0}, select to change the month',
// };


export interface IDdrCcrProps {
}

export class DdrCcr extends React.Component<IDdrCcrProps> {
    constructor(props: IDdrCcrProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h2>
                    Direct Debit
                </h2>
                <div>
                    Summary
                </div>
                <div className="ddr">
                    <div className="grid-container">
                        <div className="grid-item">
                            <MaskedTextField label="BSB" mask="999-999" required />
                        </div>
                        <div className="grid-item">
                            <TextField label="Account" required />
                        </div>
                        <div className="grid-item">
                            <TextField label="Name" required />
                        </div>
                        <div className="grid-item">
                            <Dropdown
                                placeholder="Select an option"
                                label="Payment Group"
                                options={options}
                                styles={dropdownStyles}
                            />
                        </div>
                        <div className="grid-item">
                            <Dropdown
                                placeholder="Select an option"
                                label="Contribution Frequency"
                                options={options}
                                styles={dropdownStyles}
                            />
                        </div>
                        <div className="grid-item">
                            <DatePicker
                                label="Effective Date"
                                placeholder="Select a date..."
                                ariaLabel="Select a date"
                            />

                        </div>
                        <div className="grid-item">
                            <DatePicker
                                label="Due Date"
                                placeholder="Select a date..."
                                ariaLabel="Select a date"
                            />
                        </div>
                        <div className="grid-item-btn">
                            <PrimaryButton text="Submit" />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}


