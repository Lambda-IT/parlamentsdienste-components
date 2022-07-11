import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_alert_danger.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-alert-danger',
    shadow: false,
})
export class IconAlertDanger implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
