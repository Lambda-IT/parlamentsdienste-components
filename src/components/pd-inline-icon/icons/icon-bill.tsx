import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_bill.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-bill',
    shadow: false,
})
export class IconAdd implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
