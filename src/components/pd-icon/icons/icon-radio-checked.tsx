import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_radio_checked.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-radio-checked',
    shadow: false,
})
export class IconRadioChecked implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
