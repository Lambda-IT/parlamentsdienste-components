import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_compensation.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-compensation',
    shadow: false,
})
export class IconCompensation implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
