import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import svg from '../assets-icon/icon_proposal.svg';

/** @internal **/
@Component({
    tag: 'pd-icon-proposal',
    shadow: false,
})
export class IconProposal implements ComponentInterface {
    @Prop() size: string;

    public render() {
        return <Host style={{ height: this.size, width: this.size }} innerHTML={svg}></Host>;
    }
}
