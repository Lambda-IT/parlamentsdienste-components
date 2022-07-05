import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_expand.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-expand',
    shadow: false,
})
export class IconExpand implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
