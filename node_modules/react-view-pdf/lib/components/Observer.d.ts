import * as React from 'react';
interface VisibilityChangedProps {
    isVisible: boolean;
    ratio: number;
}
interface ObserverProps {
    threshold?: number | number[];
    onVisibilityChanged(params: VisibilityChangedProps): void;
}
declare const Observer: React.FC<ObserverProps>;
export default Observer;
export declare type VisibilityChanged = VisibilityChangedProps;
