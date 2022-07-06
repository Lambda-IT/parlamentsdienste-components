import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_appview.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-appview',
    shadow: false,
})
export class IconAppview implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
