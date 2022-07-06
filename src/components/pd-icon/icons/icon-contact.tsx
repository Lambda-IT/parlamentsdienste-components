import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_contact.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-contact',
    shadow: false,
})
export class IconContact implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
