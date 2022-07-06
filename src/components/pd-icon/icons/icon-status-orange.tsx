import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_status_orange.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-status-orange',
    shadow: false,
})
export class IconStatusOrange implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
