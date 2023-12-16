import * as React from "react";
export interface ICloseIconProps {
    onClick: () => Promise<void>;
    exitIconStroke?: string;
    exitIconHover?: string;
    className?: string;
}
export declare function CloseIcon(props: ICloseIconProps): React.JSX.Element;
