import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_menu_actions.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-menu-actions',
    shadow: false,
})
export class IconMenuActions implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
