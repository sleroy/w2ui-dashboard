import W2UI from 'w2ui';
import $ from "jquery";

const world = '🗺️';

export function hello(word: string = world): string {
    return `Hello ${world}! `;
}
