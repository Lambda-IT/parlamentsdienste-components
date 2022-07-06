import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_lock.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-lock',
    shadow: false,
})
export class IconLock implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
