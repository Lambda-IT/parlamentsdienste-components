import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_checkbox_checked.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-checkbox-checked',
    shadow: false,
})
export class IconCheckboxChecked implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
