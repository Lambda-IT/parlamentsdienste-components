import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_cancel.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-cancel',
    shadow: false,
})
export class IconCancel implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
