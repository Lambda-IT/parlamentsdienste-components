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
        return <Host style={{ height: '100%', width: '100%' }} innerHTML={svg}></Host>;
    }
}
