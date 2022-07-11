import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_reservation.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-reservation',
    shadow: false,
})
export class IconReservation implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
