import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_sitzungsdurchfuehrung.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-sitzungsdurchfuehrung',
    shadow: false,
})
export class IconSitzungsdurchfuehrung implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}