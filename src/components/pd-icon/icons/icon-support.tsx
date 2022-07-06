import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_support.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-support',
    shadow: false,
})
export class IconSupport implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
