import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_history.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-history',
    shadow: false,
})
export class IconHistory implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
