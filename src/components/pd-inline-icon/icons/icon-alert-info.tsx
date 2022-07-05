import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_alert_info.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-alert-info',
    shadow: false,
})
export class IconAlertInfo implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
