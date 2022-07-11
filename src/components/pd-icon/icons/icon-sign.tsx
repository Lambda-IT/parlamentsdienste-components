import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_sign.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-sign',
    shadow: false,
})
export class IconSign implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
