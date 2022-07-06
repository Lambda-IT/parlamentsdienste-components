import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_menu.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-menu',
    shadow: false,
})
export class IconMenu implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
