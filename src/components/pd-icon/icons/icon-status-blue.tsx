import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_status_blue.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-status-blue',
    shadow: false,
})
export class IconStatusBlue implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
