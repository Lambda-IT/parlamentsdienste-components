import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_folder_open.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-folder-open',
    shadow: false,
})
export class IconFolderOpen implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
