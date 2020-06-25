import Mustache from 'mustache';
import { AppRouter } from '../routes';

export default class HomeController {
    public render(): string {
        const view = {
            firstName: 'Joe',
            calc: function () {
                return 2 + 4;
            },
        };

        const output = Mustache.render('<div id="form"></div>', view);
        return output;
    }

    public onLoad(): void {
        console.log('Onload()');
        $('#form').w2form({
            name: 'form',
            url: 'server/post',
            fields: [
                { field: 'first_name', type: 'text', required: true },
                { field: 'last_name', type: 'text', required: true },
                { field: 'comments', type: 'text' },
            ],
            actions: {
                reset: () => {
                    console.log('Reset()');
                    this.clear();
                },
                save: () => {
                    this.save();
                },
            },
        });
    }

    public clear(): void {
        console.log('Clear');
    }

    public save(): void {
        console.log('Save');
        AppRouter.navigate('/testing/checkout');
    }
}
