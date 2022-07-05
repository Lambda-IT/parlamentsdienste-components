import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_pdf_file.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-pdf-file',
    shadow: false,
})
export class IconPdfFile implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
