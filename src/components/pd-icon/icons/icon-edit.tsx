import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_edit.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-edit',
    shadow: false,
})
export class IconEdit implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
