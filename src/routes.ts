import { Router } from 'browser-hash-router';
import HomeController from './controller/home.controller';

Router.route('', () => {
    console.log("Router");
    // Load default components
    const homeController = new HomeController();
    w2ui['layout'].content('main', homeController.render());
    homeController.onLoad();
});

Router.route('/testing/checkout', () => {
    w2ui['layout'].content('main', '<code>checkout</code>');
});
Router.route('*', () => {
    w2ui['layout'].content('main', '<code>unknown</code>');
});


export const AppRouter = Router;
