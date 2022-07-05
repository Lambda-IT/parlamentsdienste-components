import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_filter.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-filter',
    shadow: false,
})
export class IconFilter implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
