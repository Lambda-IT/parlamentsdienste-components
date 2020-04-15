import { Component, ComponentInterface, Host, h, Element, State, Prop, Watch } from '@stencil/core';
import { getSvgContent, iconContent } from '../../utils/svg';

@Component({
    tag: 'pd-icon',
    styleUrl: 'pd-icon.scss',
    shadow: true,
})
export class PdIcon implements ComponentInterface {
    private io?: IntersectionObserver;

    @Element() el!: HTMLElement;

    @State() private svgContent?: string;
    @State() private isVisible = false;

    /**
     * Specifies the exact `src` of an SVG file to use.
     */
    @Prop() src?: string;

    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }

    disconnectedCallback() {
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
    private loadIcon() {
        if (this.isVisible) {
            const url = this.src;
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

    render() {
        return (
            <Host role="img">
                {this.svgContent ? (
                    <div class="pd-icon-inner" innerHTML={this.svgContent}></div>
                ) : (
                    <div class="pd-icon-inner"></div>
                )}
            </Host>
        );
    }
}
