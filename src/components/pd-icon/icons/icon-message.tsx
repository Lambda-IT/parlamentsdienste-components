import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_message.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-message',
    shadow: false,
})
export class IconMessage implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
