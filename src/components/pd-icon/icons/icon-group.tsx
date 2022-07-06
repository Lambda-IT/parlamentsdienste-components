import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_group.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-group',
    shadow: false,
})
export class IconGroup implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
