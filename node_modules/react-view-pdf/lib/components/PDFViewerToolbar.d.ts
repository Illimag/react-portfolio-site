import * as React from 'react';
import { PageViewMode } from '../types/Page';
export declare type ToolbarLabelProps = {
    exitFullscreen?: string;
    enterFullscreen?: string;
    viewModeFitToWidth?: string;
    viewModeFitToHeight?: string;
    viewModeDefault?: string;
    nextPage?: string;
    prevPage?: string;
    zoomIn?: string;
    zoomOut?: string;
    /**
     * Function that receives the current and total pages and returns a string with translations for number of pages
     * Example: 'Page 5 of 9' where 5 is the current page and 9 is the total.
     *
     * @param currentPage
     * @param totalPages
     */
    pagesOf?(currentPage: number, totalPages: number): string;
    /**
     * Used as a prefix when editing the current page.
     * Example: 'Page ____.'
     *
     */
    page?: string;
};
export interface PDFViewerToolbarProps {
    currentPage: number;
    currentViewMode: PageViewMode;
    numPages: number;
    currentScale: number;
    fullscreen: boolean;
    onPageChange(pageNum: number): void;
    onScaleChange(pageNum: number): void;
    onViewModeChange(viewMode: PageViewMode): void;
    onFullscreenChange(): void;
    labels?: ToolbarLabelProps;
}
/**
 * The `Document` is a wrapper to load PDFs and render all the pages
 */
export declare const PDFViewerToolbar: React.FC<PDFViewerToolbarProps>;
