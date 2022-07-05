import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_clipboard.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-clipboard',
    shadow: false,
})
export class IconClipboard implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
