import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_drag_drop.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-drag-drop',
    shadow: false,
})
export class IconDragDrop implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
