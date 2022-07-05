import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_ratsmitglied_gruppen.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-ratsmitglied-gruppen',
    shadow: false,
})
export class IconRatsmitgliedGruppen implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
