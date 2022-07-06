import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_configuration.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-configuration',
    shadow: false,
})
export class IconConfiguration implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
