import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_documents.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-documents',
    shadow: false,
})
export class IconDocuments implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
