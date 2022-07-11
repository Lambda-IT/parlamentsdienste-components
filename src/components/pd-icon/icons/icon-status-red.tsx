import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_status_red.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-status-red',
    shadow: false,
})
export class IconStatusRed implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
