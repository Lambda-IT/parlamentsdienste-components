import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_research.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-research',
    shadow: false,
})
export class IconResearch implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
