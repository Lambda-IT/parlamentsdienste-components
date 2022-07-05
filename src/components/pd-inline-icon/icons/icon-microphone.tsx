import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_microphone.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-microphone',
    shadow: false,
})
export class IconMicrophone implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
