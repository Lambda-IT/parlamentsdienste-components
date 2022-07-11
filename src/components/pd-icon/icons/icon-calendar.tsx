import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_calendar.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-calendar',
    shadow: false,
})
export class IconCalendar implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
