import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_gallery.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-gallery',
    shadow: false,
})
export class IconGallery implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
