import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_search.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-search',
    shadow: false,
})
export class IconSearch implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
