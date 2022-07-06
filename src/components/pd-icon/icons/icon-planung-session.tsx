import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_planung_session.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-planung-session',
    shadow: false,
})
export class IconPlanungSession implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
