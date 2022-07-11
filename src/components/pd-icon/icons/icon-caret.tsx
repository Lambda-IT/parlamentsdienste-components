import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_caret.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-caret',
    shadow: false,
})
export class IconCaret implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
