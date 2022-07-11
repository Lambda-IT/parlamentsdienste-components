import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_close_bold.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-close-bold',
    shadow: false,
})
export class IconCloseBold implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
