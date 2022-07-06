import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_sort.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-sort',
    shadow: false,
})
export class IconSort implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
