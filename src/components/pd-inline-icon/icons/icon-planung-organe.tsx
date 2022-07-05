import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_planung_organe.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-planung-organe',
    shadow: false,
})
export class IconPlanungOrgane implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
