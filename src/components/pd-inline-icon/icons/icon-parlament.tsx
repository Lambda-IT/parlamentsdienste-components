import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_parlament.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-parlament',
    shadow: false,
})
export class IconParlament implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
