import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_shrink.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-shrink',
    shadow: false,
})
export class IconShrink implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
