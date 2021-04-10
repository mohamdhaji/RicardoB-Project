import * as React from 'react';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown,  IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 120 },
};

const options: IDropdownOption[] = [
    { key: 'thf', text: 'Teachers/Uni' },
    { key: 'nmh', text: 'Nurses' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

export const BasicDropdown: React.FunctionComponent = () => {
    return (
        <Stack tokens={stackTokens}>
            <Dropdown
                options={options}
                styles={dropdownStyles}
            />
        </Stack>
    );
};
