/* eslint-disable @typescript-eslint/no-empty-function */

import { renderMainLayout } from './layout/mainLayout';
import { renderSidebar } from './layout/sidebar';
import { AppRouter } from './routes';
import { renderTopBar } from './layout/topBar';


// Wait for JQuery
$(function () {
    const mainTag = 'layout';
    

    // Render main layout
    renderMainLayout(mainTag);
    renderSidebar(mainTag, 'left');
    renderTopBar(mainTag, 'top');

    AppRouter.start();
});
