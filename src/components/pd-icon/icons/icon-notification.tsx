import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_notification.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-notification',
    shadow: false,
})
export class IconNotification implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
