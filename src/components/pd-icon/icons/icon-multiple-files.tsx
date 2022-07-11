import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_multiple_files.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-multiple-files',
    shadow: false,
})
export class IconMultipleFiles implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
