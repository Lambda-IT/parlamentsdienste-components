import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_download.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-download',
    shadow: false,
})
export class IconDownload implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
