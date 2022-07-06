import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_audio.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-audio',
    shadow: false,
})
export class IconAudio implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
