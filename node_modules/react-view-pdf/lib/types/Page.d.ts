export declare enum PageViewMode {
    DEFAULT = 0,
    FIT_TO_WIDTH = 1,
    FIT_TO_HEIGHT = 2
}
export interface PageType {
    ref: HTMLDivElement | null;
    ratio: number;
    loaded: boolean;
    width?: number;
    height?: number;
}
