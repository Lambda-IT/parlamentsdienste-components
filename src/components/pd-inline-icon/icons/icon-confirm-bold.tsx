import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_confirm_bold.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-confirm-bold',
    shadow: false,
})
export class IconConfirmBold implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
