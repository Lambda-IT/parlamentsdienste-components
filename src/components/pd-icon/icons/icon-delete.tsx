import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_delete.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-delete',
    shadow: false,
})
export class IconDelete implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
