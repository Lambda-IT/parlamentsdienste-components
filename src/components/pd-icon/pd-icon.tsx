import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'pd-icon',
    styleUrl: 'pd-icon.scss',
    shadow: true,
})
export class Icon implements ComponentInterface {
    /** Size of the icon in 'rem' */
    @Prop() size: number = 2.375;

    /** Name of an icon from the provided gallery */
    @Prop() name: string;

    /** Rotation in 'deg' */
    @Prop() rotate: number;

    /** Flip in X/Y direction */
    @Prop() flip: 'x' | 'y' | 'xy';

    /** Spin animation in ms per rotation */
    @Prop() spin: number;

    /** change animation direction */
    @Prop() spinReverse: boolean = false;

    render() {
        const SVG = `pd-icon-${this.name.replace('_', '-')}`;
        const flipX = this.flip?.includes('x') ? 'scaleX(-1)' : undefined;
        const flipY = this.flip?.includes('y') ? 'scaleY(-1)' : undefined;
        const rotate = this.rotate ? `rotate(${this.rotate}deg` : undefined;
        const transformStyle = [flipX, flipY, rotate].filter((x) => x !== undefined).join(' ');

        return (
            <Host
                class={{
                    spin: !!this.spin,
                }}
                style={{ transform: transformStyle ?? null, height: `${this.size}rem`, width: `${this.size}rem` }}
            >
                <SVG class="icon" size={`${this.size}rem`}></SVG>
            </Host>
        );
    }
}
