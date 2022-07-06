import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_excel_export.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-excel-export',
    shadow: false,
})
export class IconExcelExport implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
