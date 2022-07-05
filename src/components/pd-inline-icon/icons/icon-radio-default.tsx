import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_radio_default.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-radio-default',
    shadow: false,
})
export class IconRadioDefault implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
