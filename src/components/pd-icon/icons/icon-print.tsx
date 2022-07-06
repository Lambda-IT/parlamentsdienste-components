import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_print.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-print',
    shadow: false,
})
export class IconPrint implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
