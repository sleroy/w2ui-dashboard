/**
 * Render the main layout
 * @param mainTag the main tag to attach the layout
 */
export function renderMainLayout(mainTag: string) {
    const pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
    $('#' + mainTag).w2layout({
        name: 'layout',
        panels: [
            { type: 'top', size: 50, style: pstyle, content: 'top' },
            { type: 'left', size: 200, style: pstyle, content: 'left', resizable: true, minSize: 120 },
            {
                type: 'main',
                style: pstyle + 'border-top: 0px;',
                content: 'content',
                toolbar: {
                    items: [
                        { type: 'check', id: 'item1', caption: 'Check', img: 'icon-page', checked: true },
                        { type: 'break', id: 'break0' },
                        {
                            type: 'menu',
                            id: 'item2',
                            caption: 'Drop Down',
                            img: 'icon-folder',
                            items: [
                                { text: 'Item 1', icon: 'icon-page' },
                                { text: 'Item 2', icon: 'icon-page' },
                                { text: 'Item 3', value: 'Item Three', icon: 'icon-page' },
                            ],
                        },
                        { type: 'break', id: 'break1' },
                        {
                            type: 'radio',
                            id: 'item3',
                            group: '1',
                            caption: 'Radio 1',
                            img: 'icon-page',
                            hint: 'Hint for item 3',
                            checked: true,
                        },
                        {
                            type: 'radio',
                            id: 'item4',
                            group: '1',
                            caption: 'Radio 2',
                            img: 'icon-page',
                            hint: 'Hint for item 4',
                        },
                        { type: 'spacer' },
                        {
                            type: 'button',
                            id: 'item5',
                            caption: 'Item 5',
                            icon: 'w2ui-icon-check',
                            hint: 'Hint for item 5',
                        },
                    ],
                    onClick: function (event: any) {
                        //
                    },
                },
            },
        ],
    });
}
