import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_confirm.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-confirm',
    shadow: false,
})
export class IconConfirm implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
