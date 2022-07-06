import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_response.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-response',
    shadow: false,
})
export class IconResponse implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
