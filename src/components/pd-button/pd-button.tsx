import { Component, ComponentInterface, h, Host, Listen, Prop } from '@stencil/core';
import { PdButtonColor, PdButtonSize, PdButtonType, PdIconLocation } from '../../interface';

/**
 * @slot - button content
 * @slot icon - slot for icons
 */
@Component({
    tag: 'pd-button',
    styleUrl: 'pd-button.scss',
    shadow: true,
})
export class Button implements ComponentInterface {
    /**
     * Sets button to disbaled state
     */
    @Prop() disabled = false;

    /**
     * Sets button type |button|submit|reset|
     */
    @Prop() type: PdButtonType = 'button';

    /**
     * Color schema used for the button
     */
    @Prop() color: PdButtonColor = 'primary';

    /**
     * Button size
     */
    @Prop() size: PdButtonSize = 'normal';

    /**
     * Use outline schema
     */
    @Prop() outline: boolean = false;

    /**
     * Sets button to 100% width
     */
    @Prop() fullWidth: boolean = false;

    /**
     * Set href to create a link button
     */
    @Prop() href: string;

    /**
     * Sets target for link button e.g. '_blank'
     */
    @Prop() target: string = '_blank';

    @Prop({ attribute: 'icon-location' }) iconLocation: PdIconLocation = 'none';

    /**
     * Click event
     */
    @Listen('click', { capture: true })
    handleClick(e: Event) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        return e;
    }

    public render() {
        const { href, target, type, disabled } = this;
        const TagType = href ? 'a' : 'button';
        const role = 'button';
        const typeAttrs = TagType === 'button' ? { type, role } : { href, target };
        if (typeAttrs.href) console.log('typeAttrs', typeAttrs);
        return (
            <Host class={{ 'pd-button-fullwidth': this.fullWidth }}>
                <TagType
                    {...typeAttrs}
                    disabled={disabled}
                    class={{
                        'pd-button': TagType === 'button',
                        'pd-link': TagType !== 'button',
                        [`pd-button-${this.color}`]: true,
                        [`pd-button-${this.size}`]: true,
                        'pd-button-outline': this.outline,
                    }}
                >
                    {this.renderIcon('left')}
                    {this.renderCenter()}
                    {this.renderIcon('right')}
                </TagType>
            </Host>
        );
    }

    private renderIcon(location: PdIconLocation) {
        if (location !== this.iconLocation) return;
        return (
            <div class={`pd-button-icon-${location}`}>
                <slot name="icon"></slot>
            </div>
        );
    }

    private renderCenter() {
        if (this.iconLocation === 'center') return this.renderIcon('center');
        return <slot></slot>;
    }
}
