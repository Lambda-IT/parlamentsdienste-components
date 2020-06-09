import { Component, ComponentInterface, Host, h, Element, State, Prop, Watch, getAssetPath } from '@stencil/core';
import { getSvgContent, iconContent } from '../../utils/svg';

@Component({
    tag: 'pd-icon',
    styleUrl: 'pd-icon.scss',
    shadow: true,
    assetsDirs: ['assets-icon'],
})
export class PdIcon implements ComponentInterface {
    private io?: IntersectionObserver;

    @Element() element!: HTMLElement;

    /**
     * Specifies the `src` url of an SVG file to use.
     */
    @Prop() src?: string;

    /**
     * Name of an icon from the provided gallery
     */
    @Prop() name?: string;

    /**
     * Size of the icon in 'em'
     */
    @Prop() size?: number;

    /**
     * Rotation in 'deg'
     */
    @Prop() rotate: number = 0;

    /**
     * Flip in X/Y direction
     */
    @Prop() flip: 'x' | 'y' | 'xy';

    /**
     * Spin animation in ms per rotation
     */
    @Prop() spin: number;

    /** change animation direction */
    @Prop() spinReverse: boolean = false;

    @State() private svgContent?: string;
    @State() private isVisible = false;

    public connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.element, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }

    public disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }

    private waitUntilVisible(el: HTMLElement, rootMargin: string, cb: () => void) {
        if (typeof window !== 'undefined' && (window as any).IntersectionObserver) {
            const io = (this.io = new (window as any).IntersectionObserver(
                (data: IntersectionObserverEntry[]) => {
                    if (data[0].isIntersecting) {
                        io.disconnect();
                        this.io = undefined;
                        cb();
                    }
                },
                { rootMargin },
            ));

            io.observe(el);
        } else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }

    @Watch('src')
    @Watch('name')
    private loadIcon() {
        if (this.isVisible) {
            const url = this.src || (this.name ? getAssetPath(`./assets-icon/icon_${this.name}.svg`) : null);
            if (url) {
                if (iconContent.has(url)) {
                    // sync if it's already loaded
                    this.svgContent = iconContent.get(url);
                } else {
                    // async if it hasn't been loaded
                    getSvgContent(url).then(() => (this.svgContent = iconContent.get(url)));
                }
            }
        }
    }

    public render() {
        const flipX = this.flip?.includes('x') ? 'scaleX(-1)' : undefined;
        const flipY = this.flip?.includes('y') ? 'scaleY(-1)' : undefined;
        const rotate = this.rotate ? `rotate(${this.rotate}deg` : undefined;

        const transformStyle = [flipX, flipY, rotate].filter((x) => x !== undefined).join(' ');

        return (
            <Host
                role="img"
                class={{
                    spin: !!this.spin,
                }}
                style={{
                    fontSize: `${this.size}em` ?? null,
                    transform: transformStyle ?? null,
                    animationDuration: this.spin ? `${this.spin}ms` : null,
                    animationName: this.spinReverse ? `spin-reverse` : null,
                }}
            >
                {this.renderSvg()}
            </Host>
        );
    }

    public renderSvg() {
        if (!this.svgContent) return <div class="pd-icon-inner"></div>;
        else return <div class="pd-icon-inner" innerHTML={this.svgContent}></div>;
    }
}
