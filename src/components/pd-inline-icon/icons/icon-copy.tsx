import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_copy.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-copy',
    shadow: false,
})
export class IconCopy implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
