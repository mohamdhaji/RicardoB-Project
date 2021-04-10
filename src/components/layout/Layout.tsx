import * as React from 'react';
import './Layout.css';
import { Route } from 'react-router-dom';
import { DdrCcr } from '../../containers/ddrccr/ddrccr';

import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';


export interface IAppProps {
}

// export function Layout(props: IAppProps) {
//     return (
//         <div className="layout">

//             add tabs here

//                <Route path="/ddrccr" component={DdrCcr} />

//                 <div>
//                     E5 component
//                 </div>

//         </div>
//     );
// }

export class Layout extends React.Component<IAppProps> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (
            <div className="layout">
                <Pivot
                    aria-label="Links of Large Tabs Pivot Example"
                    linkFormat={PivotLinkFormat.tabs}
                    linkSize={PivotLinkSize.large}
                >
                    <PivotItem headerText="HAMBS">
                        <Route path="/ddrccr" component={DdrCcr} />
                    </PivotItem>
                    <PivotItem headerText="E5">
                        <Label>Coming soon</Label>
                    </PivotItem>
                </Pivot>
            </div>
        );
    }

}
