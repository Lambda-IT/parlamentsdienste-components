import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_dictionary.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-dictionary',
    shadow: false,
})
export class IconDictionary implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
