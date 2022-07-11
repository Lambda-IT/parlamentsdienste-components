import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_comment.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-comment',
    shadow: false,
})
export class IconComment implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
