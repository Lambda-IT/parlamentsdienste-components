import { Component, ComponentInterface, Host, h, Element, State, Prop, Watch } from '@stencil/core';
import { getURL } from '../../utils/path';
import { getSvgContent, iconContent } from '../../utils/svg';

@Component({
    tag: 'pd-icon',
    styleUrl: 'pd-icon.scss',
    shadow: true,
    assetsDirs: ['assets-icon'],
})
export class PdIcon implements ComponentInterface {
    private io?: IntersectionObserver;
    private wrapperElement?: HTMLDivElement;

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
     * Size of the icon in 'rem'
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

    /** title tag in svg for accessability */
    @Prop() iconTitle: string;

    /** description tag in svg for accessability*/
    @Prop() iconDescription: string;

    @State() private svgContent?: string;
    @State() private isVisible = false;

    public componentDidRender() {
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
            const url = this.src || (this.name ? getURL(`./assets-icon/icon_${this.name}.svg`) : null);
            if (url) {
                if (iconContent.has(url)) {
                    // sync if it's already loaded
                    this.svgContent = iconContent.get(url);
                    this.appendSVGContent(this.svgContent, this.wrapperElement);
                } else {
                    // async if it hasn't been loaded
                    getSvgContent(url).then(() => {
                        this.svgContent = iconContent.get(url);
                        this.appendSVGContent(this.svgContent, this.wrapperElement);
                    });
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
                    fontSize: this.size ? `${this.size}rem` : null,
                    transform: transformStyle ?? null,
                    animationDuration: this.spin ? `${this.spin}ms` : null,
                    animationName: this.spinReverse ? `spin-reverse` : null,
                }}
            >
                <div class="pd-icon-inner" ref={(textarea) => (this.wrapperElement = textarea)}></div>
            </Host>
        );
    }

    private appendSVGContent(svgContent: string, appendElement: HTMLElement) {
        if (!appendElement.hasChildNodes()) {
            const doc = new DOMParser().parseFromString(svgContent, 'image/svg+xml');
            const svgElement = appendElement.ownerDocument.importNode(doc.documentElement, true);

            // append accessability elements
            if (this.iconDescription) {
                const descriptionElement = doc.createElement('desc');
                descriptionElement.innerHTML = this.iconDescription;
                svgElement.prepend(descriptionElement);
            }

            let titleElement = svgElement.getElementsByTagName('title').item(0);
            if (titleElement && this.iconTitle) titleElement.innerHTML = this.iconTitle;
            if (!titleElement && this.iconTitle) {
                titleElement = doc.createElement('title');
                titleElement.innerHTML = this.iconTitle;
                svgElement.prepend(titleElement);
            }

            appendElement.appendChild(svgElement);
        }
    }
}
