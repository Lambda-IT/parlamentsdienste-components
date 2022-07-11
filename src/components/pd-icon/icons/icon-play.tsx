import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_play.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-play',
    shadow: false,
})
export class IconPlay implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}