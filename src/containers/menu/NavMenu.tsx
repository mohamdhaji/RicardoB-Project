import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import './NavMenu.css';

const navStyles: Partial<INavStyles> = {
    root: {
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto',
        float: 'left'
    },
};

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: 'Home',
                url: '/',
                key: 'key1',
                isExpanded: true,
                target: '_self',
            },
            {
                name: 'Add Child',
                url: '/ddrccr',
                key: 'key2',
                isExpanded: true,
                target: '_self',
            },
            {
                name: 'Change Cover',
                url: '/ddrccr',
                key: 'key3',
                isExpanded: true,
                target: '_self',
            },
            {
                name: 'Debit & Credit',
                url: '/ddrccr',
                key: 'key4',
                isExpanded: true,
                target: '_self',
            },
            {
                name: 'Escalation/SME',
                url: '/ddrccr',
                key: 'key5',
                isExpanded: true,
                target: '_self',
            },
        ],
    },
];

export const NavMenu: React.FunctionComponent = () => {
    return (
        <div className="navmenu">
            <Nav
                selectedKey="key1"
                ariaLabel="Nav basic example"
                styles={navStyles}
                groups={navLinkGroups}
            />
        </div>
    );
};



