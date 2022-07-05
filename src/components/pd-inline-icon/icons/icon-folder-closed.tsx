import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_folder_closed.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-folder-closed',
    shadow: false,
})
export class IconFolderClosed implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
