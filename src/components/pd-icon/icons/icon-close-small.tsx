import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_close_small.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-close-small',
    shadow: false,
})
export class IconCloseSmall implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
