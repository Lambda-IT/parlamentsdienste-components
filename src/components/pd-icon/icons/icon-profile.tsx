import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_profile.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-profile',
    shadow: false,
})
export class IconProfile implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
