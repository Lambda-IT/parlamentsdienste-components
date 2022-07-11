import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_status_undefined.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-status-undefined',
    shadow: false,
})
export class IconStatusUndefined implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
