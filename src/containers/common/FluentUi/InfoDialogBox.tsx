import * as React from 'react';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { useBoolean } from '@uifabric/react-hooks';

export interface IInfoDialogBoxProps {
    target: string,
    headline: string,
    message: string
}

export const InfoDialogBox: React.FunctionComponent<IInfoDialogBoxProps> = (props: IInfoDialogBoxProps) => {

    const [teachingBubbleVisible, { setFalse: hideTeachingBubbleVisible }] = useBoolean(true);

    return (
        <div>
            {
                teachingBubbleVisible && (
                    <TeachingBubble
                        calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
                        target={props.target}
                        isWide={false}
                        hasCloseButton={true}
                        closeButtonAriaLabel="Close"
                        onDismiss={hideTeachingBubbleVisible}
                        headline={props.headline}
                    >
                        {props.message}
                    </TeachingBubble>
                )
            }
        </div>
    );
}
