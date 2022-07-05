import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_detail.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-detail',
    shadow: false,
})
export class IconDetail implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
